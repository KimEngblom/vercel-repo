import { sql } from '@vercel/postgres';

export default async function handler(res, req) {

    const { rows } = await sql`select * from pets`;
	res.status(200).json({
        method: req.method,
         hello: "world",
         pets: rows
        });
    }