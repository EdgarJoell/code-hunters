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

                 console.log(JSON.stringify(tagsToAdd, null, 2));
             });

            setTags(Array.from(tagsToAdd.values()));
        }

        loadTags();
    }, [latestPosts]);

    if(loading) {
        return <Loading />;
    }

   return (
       <div className="main-container">
          <div className="tags-section">
             <h5>Tags</h5>
              <div id="tag-list">
                  { tags.length > 0 ? tags.map((tag: Tag) => (
                      <PostTag key={tag.id} id={tag.id} color={tag.color} name={tag.name} created_at={tag.created_at} updated_at={tag.updated_at} />
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
                        <div className="small-info">
                            <p className="posted">Author: <Link to={`/authors/${post.author}`}>{post.author}</Link></p>
                            <p className="posted">Posted: {post.created_at.toLocaleDateString()}</p>
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