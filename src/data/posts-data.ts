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
            tags: [
                {
                    id: 1,
                    name: "Ruby",
                    color: "rgba(227, 31, 54, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 7,
                    name: "Rails",
                    color: "rgba(178, 0, 0, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]
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
            tags: [
                {
                    id: 3,
                    name: "TypeScript",
                    color: "rgba(38, 133, 255, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 5,
                    name: "GitHub Actions",
                    color: "rgba(94, 94, 94, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]
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
            tags: [
                {
                    id: 1,
                    name: "Ruby",
                    color: "rgba(227, 31, 54, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 7,
                    name: "Rails",
                    color: "rgba(178, 0, 0, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]
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
            tags: [
                {
                    id: 3,
                    name: "TypeScript",
                    color: "rgba(38, 133, 255, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 5,
                    name: "GitHub Actions",
                    color: "rgba(94, 94, 94, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]
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
            tags: [
                {
                    id: 2,
                    name: "Java",
                    color: "rgba(255, 113, 38, 0.5)",
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ]
        }
    ];
}
