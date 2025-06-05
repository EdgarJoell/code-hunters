import {Post} from "./Post.ts";

export interface Author {
    first_name: string,
    last_name: string,
    email: string,
    posts: Post[]
    created_at: Date,
    updated_at: Date
}
