import './HomePage.css';
import {useEffect, useState} from "react";
import { getTheLatestPosts } from "../services/posts-services.ts";
import Loading from "../components/Loading.tsx";

export default function Home() {
   const [latestPosts, setLatestPosts] = useState<Post[]>([])
    const [ loading, setLoading ] = useState<boolean>(true);

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
    }, [])

    if(loading) {
        return <Loading />;
    }

   return (
       <div className="main-container">
          <div className="tags-section">
             <h5>Tags</h5>
          </div>
          <div className="posts-section">
             <h2>Latest Posts of Learning</h2>
             <div>
                {latestPosts.length > 0 ? latestPosts.map((post: Post) => (
                    <div key={post.id} className="">
                       <h3>{post.title}</h3>
                       <h6>{post.author}</h6>
                       <p>{post.updated_at.toString()}</p>
                        <p>{post.created_at.toString()}</p>
                        <p>{post.published}</p>
                        <p>{post.is_latest}</p>
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