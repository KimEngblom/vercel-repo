import { sql } from '@vercel/postgres';

export default async function handler(res, req) {

    if (req.method =="post"){
        const{name,spicies,age} = req.body;
        await sql`
        insert into pets(
            name,spicies,age
        ) VALUES (
            ${name},${spicies},${age}
        )`
    }

    const { rows } = await sql`select * from pets`;
	res.status(200).json({
        method: req.method,
         hello: "world",
         pets: rows
        });
    }