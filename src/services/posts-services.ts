import { getLatestPosts } from "../api/posts-api.ts";
import {getLatestPostsFromSeed} from "../data/posts-data.ts";
import {Post} from "../models/Post.ts";

export async function getTheLatestPosts() {
    let res: Post[];
    res = await getLatestPosts();

    console.log(res);

    if(!res || res.length === 0) {
        res = getLatestPostsFromSeed();
    }

    return res;
}