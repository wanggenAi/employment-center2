// import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';

import { employmentCenter } from '../lib/placeholder-data';

const client = await db.connect();

async function seedEmps() {

  await client.sql`DROP TABLE IF EXISTS employmentcenter`;
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS employmentcenter (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      job_name VARCHAR(255) NOT NULL,
      salary NUMERIC(10,2) NOT NULL,
      availability INT NOT NULL,
      tags TEXT[] NOT NULL,
      job_detail TEXT NOT NULL,
      publish_date DATE NOT NULL,
      contact_us VARCHAR(255) NOT NULL
    );
  `;

  

  const emps = await Promise.all(
    employmentCenter.map(
      (emp) => {
        const tagsArray = `{${emp.tags.join(',')}}`;
        client.sql`
        INSERT INTO employmentcenter (job_name, salary, availability, tags, job_detail, publish_date, contact_us)
        VALUES (${emp.job_name}, ${emp.salary}, ${emp.availability}, ${tagsArray}, ${emp.job_detail}, ${emp.publishdate}, ${emp.contact_us})
        ON CONFLICT (id) DO NOTHING;`
      }
    ),
  );
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedEmps();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}


