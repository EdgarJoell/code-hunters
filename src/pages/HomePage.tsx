import './HomePage.css';
import {useEffect, useState} from "react";
import { getTheLatestPosts } from "../services/posts-services.ts";
import Loading from "../components/Loading.tsx";
import {Link} from "react-router-dom";
import {Post} from "../models/Post.ts";
import {Tag} from "../models/Tag.ts";
import PostTag from "../components/PostTag.tsx";

export default function Home() {
    const [ latestPosts, setLatestPosts ] = useState<Post[]>([])
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ tags, setTags ] = useState<Tag[]>([]);
    const [ filteredTags, setFilteredTags ] = useState<Tag[]>([]);

    useEffect(() => {
        async function fetchLatest() {
            try {
                const res: Post[] = await getTheLatestPosts();

                setLatestPosts(res);
            } catch (e) {
                console.log("Failed to fetch the latest posts!");
                setLatestPosts([]);
            } finally {
                setLoading(false);
            }
        }

        fetchLatest().then(data => data);
    }, []);

    useEffect(() => {
        const tagsToAdd: Map<number, Tag> = new Map<number, Tag>();
        function loadTags() {
            latestPosts.forEach((post: Post) => {
                 post.tags.forEach((tag: Tag) => {
                     console.log(JSON.stringify(tag, null, 2));
                     if(!tagsToAdd.has(tag.id)) tagsToAdd.set(tag.id, tag);
                 })
             });

            setTags(Array.from(tagsToAdd.values()));
        }

        loadTags();
    }, [latestPosts]);

    const handleTagClick = (tag: Tag, filtered: boolean) => {
        filtered ?
            (filteredTags.indexOf(tag) === -1 ? filteredTags.push(tag) : setFilteredTags([...filteredTags]))
            : (filteredTags.splice(filteredTags.indexOf(tag), 1));

        setFilteredTags([...filteredTags]);
    }

    if(loading) {
        return <Loading />;
    }

   return (
       <div className="main-container">
          <div className="tags-section">
             <h5>Tags</h5>
              <div id="filtered" className="tag-list">
                  <h6>Filtered Tags</h6>
                  { filteredTags.length > 0 ? filteredTags.map((tag: Tag) => (
                      <PostTag onClick={() => handleTagClick(tag, false)} key={tag.id} tag={tag} />
                  )) : (
                      <span></span>
                  )}
              </div>
              <div className="tag-list">
                  <h6>Available Tags</h6>
                  { tags.length > 0 ? tags.map((tag: Tag) => (
                      <PostTag onClick={() => handleTagClick(tag, true)} key={tag.id} tag={tag} />
                  )) : (
                     <span></span>
                  )}
              </div>
          </div>
          <div className="posts-section">
             <h2>Latest Posts of Learning</h2>
             <div>
                {latestPosts.length > 0 ? latestPosts.map((post: Post) => (
                    <div key={post.id} className="latest-post">
                        <h3 className="post-header">Title: <Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                        <div className="small-info-container">
                            <div className="small-info">
                                <p className="posted">Author: <Link to={`/authors/${post.author}`}>{post.author}</Link></p>
                                <p className="posted">Posted: {post.created_at.toLocaleDateString()}</p>
                            </div>

                            <div className="post-tags">
                                { post.tags.length > 0 ? (
                                    post.tags.map((tag: Tag) => (
                                        <PostTag key={tag.id} tag={tag} />
                                    ))
                                ) : (
                                    <span></span>
                                )}
                            </div>

                            { post.updated_at.toLocaleDateString() !== post.created_at.toLocaleDateString() ? (
                                <p className="posted">Updated At: {post.updated_at.toLocaleDateString()}</p>
                            ) : (
                                <span></span>
                            )}
                        </div>
                        <p>Published: {post.published.toString()}</p>
                        <p>Latest?: {post.is_latest.toString()}</p>
                       <p>{post.postContent}</p>
                    </div>
                )) : (
                    <h2>OH NO! No New Posts in the last month! </h2>
                )}
             </div>
          </div>
          <div className="third-section">
             <h5>Other Section</h5>
          </div>
       </div>
   )
}