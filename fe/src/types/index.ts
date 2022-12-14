export type Res<T = undefined> = {
    status: boolean,
    info: string,
    data: T
}

export type Post = {
    title: string,
    content: string,
    created_at: string,
    poster: string,
    comments: {
        content: string,
        created_at: string,
        poster: string
    }[]
}