interface Post {
    id: number;
    title: string;
    author: string;
    created_at: Date;
    updated_at: Date;
    postContent: string;
    published: boolean;
    is_latest: boolean;
}