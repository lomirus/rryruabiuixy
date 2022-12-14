import { BASE_URL } from "../config"
import { Res } from "../types";

export default async function(
    postId: number,
    content: string
): Promise<Res> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const res = await fetch(`${BASE_URL}/api/comment`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            content,
            post_id: postId
        })
    })

    return res.json();
}