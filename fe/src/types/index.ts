export type Res<T = undefined> = {
    status: boolean,
    info: string,
    data: T
}

export type Post = {
    id: number,
    title: string,
    content: string,
    poster_id: number,
    created_at: string
}