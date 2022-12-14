import { BASE_URL } from "../config";
import { Res } from "../types";

export default async function postPost(
    title: string,
    content: string
): Promise<Res<number>> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const res = await fetch(`${BASE_URL}/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            title,
            content
        })
    })

    return res.json()
}