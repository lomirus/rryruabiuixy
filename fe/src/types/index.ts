export type Res<T = undefined> = {
    status: boolean,
    info: string,
    data: T
}

export type Post = {
    title: string,
    content: string,
    created_at: number,
    poster: string,
    comments: {
        content: string,
        created_at: number,
        poster: string
    }[]
}

export type PostPreviewType = {
    id: number,
    title: string,
    created_at: number,
    poster: string,
}