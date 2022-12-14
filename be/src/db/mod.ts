import { Client } from "mysql";
import { username, password, db } from "../config/mod.ts";

const client = await new Client().connect({
    hostname: "127.0.0.1",
    username,
    password,
});

await client.execute(`CREATE DATABASE IF NOT EXISTS ${db}`);
await client.execute(`USE ${db}`);

await client.execute(`CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(32) NOT NULL UNIQUE,
    password varchar(32) NOT NULL
)`);

await client.execute(`CREATE TABLE IF NOT EXISTS posts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    content VARCHAR(5000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    poster_id INT NOT NULL
)`);

await client.execute(`CREATE TABLE IF NOT EXISTS comments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(1000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    poster_id INT NOT NULL,
    post_id INT NOT NULL
)`);

export default client;