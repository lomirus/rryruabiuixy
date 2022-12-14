export type User = {
    id: number,
    username: string,
    password: string,
}

export type Post = {
    id: number,
    title: string,
    content: string,
    poster_id: number
}