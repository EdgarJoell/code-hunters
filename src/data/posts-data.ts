import {Post} from "../models/Post.ts";

export function getLatestPostsFromSeed(): Post[] {
    return [
        {
            id: 1,
            title: "My 'Getting Started' With Ruby on Rails",
            author: "Edgar Zambrana",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "This crap is really stinking cool!",
            published: false,
            is_latest: true,
            tags: []
        },
        {
            id: 2,
            title: "Second Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true,
            tags: []
        },
        {
            id: 3,
            title: "Third Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true,
            tags: []
        },
        {
            id: 4,
            title: "Fourth Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true,
            tags: []
        },
        {
            id: 5,
            title: "Fifth Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true,
            tags: []
        }
    ];
}
