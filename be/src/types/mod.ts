export type User = {
    id: number,
    username: string,
    password: string,
}

export type Post = {
    id: number,
    title: string,
    content: string,
    poster_id: number,
    created_at: Date
}

export type Comment = {
    id: number,
    content: string,
    created_at: Date,
    poster_id: number,
    post_id: number,
}