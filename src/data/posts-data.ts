export function getLatestPostsFromSeed(): Post[] {
    return [
        {
            id: 1,
            title: "First Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true
        },
        {
            id: 2,
            title: "Second Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true
        },
        {
            id: 3,
            title: "Third Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true
        },
        {
            id: 4,
            title: "Fourth Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true
        },
        {
            id: 5,
            title: "Fifth Post",
            author: "John Doe",
            created_at: new Date(),
            updated_at: new Date(),
            postContent: "Some Content",
            published: false,
            is_latest: true
        }
    ];
}
