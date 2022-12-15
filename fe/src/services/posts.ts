import { BASE_URL } from "../config";
import { Post, PostPreviewType, Res } from "../types";

export default async function getPosts(): Promise<Res<PostPreviewType[]>> {
    const res = await fetch(`${BASE_URL}/api/posts`)
    return res.json();
}