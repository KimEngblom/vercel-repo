import { sql } from '@vercel/postgres';
 
export default async function handler(res,req) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS pets (id serial, Name varchar);`;

      await sql`ALTER TABLE pets ADD COLUMN IF NOT EXISTS spicies varchar;`;

    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}