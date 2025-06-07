import {Post} from "../models/Post.ts";

const BASE_URL: string = import.meta.env.VITE_API_URL;

export async function getAllPosts(): Promise<Post[]> {
    try {
        const res: Response = await fetch(`${BASE_URL}/posts`);

        return res.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getOnePost(id: number): Promise<Post | undefined> {
    try {
        const res: Response = await fetch(`${BASE_URL}/posts/${id}`);

        return res.json();
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function getLatestPosts(): Promise<Post[]> {
    try {
        const res: Response = await fetch(`${BASE_URL}/posts/latest`);

        return res.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

