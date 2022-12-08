import { BASE_URL } from "../config"

type LoginRes = {
    success: boolean;
    info: string
}

export default async function(
    username: string,
    password: string
): Promise<LoginRes> {
    const data = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        })
    });
    const json: LoginRes = await data.json();
    return json;
}