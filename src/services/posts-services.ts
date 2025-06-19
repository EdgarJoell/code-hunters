import { getLatestPosts } from "../api/posts-api.ts";
import {getLatestPostsFromSeed} from "../data/posts-data.ts";
import {Post} from "../models/Post.ts";

export async function getTheLatestPosts(): Promise<Post[]> {
    const postsResponse = await getLatestPosts();

    if(!postsResponse || postsResponse.length === 0) {
        return getLatestPostsFromSeed();
    }

    return postsResponse;
}