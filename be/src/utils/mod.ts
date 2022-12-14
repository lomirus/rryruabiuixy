import client from "../db/mod.ts";

export async function getUsernameFromId(userId: number): Promise<string> {
    return (await client.query(
        "SELECT username FROM users WHERE id=?",
        [userId],
    ))[0]?.username;
}