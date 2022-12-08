import { BASE_URL } from "../config"

type RegisterRes = {
    success: boolean;
    info: string
}

export default async function(
    username: string,
    password: string
): Promise<RegisterRes> {
    const data = await fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        })
    });
    const json: RegisterRes = await data.json();
    return json;
}