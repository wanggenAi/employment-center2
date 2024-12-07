import { sql, db } from '@vercel/postgres';
import {
  Job,
  SearchParams,
} from './definitions';

const client = await db.connect();

export async function fetchJobsById(id: string) {
  const job = await sql<Job>`
    SELECT
    id,
    job_name,
    salary,
    availability,
    tags,
    TO_CHAR(publish_date, 'YYYY-MM-DD') AS publishdate,
    job_detail,
    contact_us
  FROM employmentcenter
  WHERE id = ${id}
  `;
  return job.rows[0];
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredJobs(
  query: SearchParams,
  currentPage: number,
) {

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  let whereClause: string[] = [];
  let values: any[] = [];
  if (query.searchStr) {
    whereClause.push(`job_name LIKE $${values.length + 1}`);
    values.push(`%${query.searchStr}%`);
  }

  if (query.tag) {

    whereClause.push(`tags @> $${values.length + 1}::TEXT[]`);
    values.push([query.tag]);

  }

  if (query.availability) {
    whereClause.push(`availability = $${values.length + 1}`);
    values.push(Number(query.availability));
  }

  const whereSql = whereClause.length > 0 ? `WHERE ${whereClause.join(' AND ')}` : '';

  const queryText = `
  SELECT
    id,
    job_name,
    salary,
    availability,
    tags,
    TO_CHAR(publish_date, 'YYYY-MM-DD') AS publishdate,
    job_detail,
    contact_us
  FROM employmentcenter
  ${whereSql}
  ORDER BY
    job_name ASC,
    salary DESC,
    availability DESC
  LIMIT $${values.length + 1} OFFSET $${values.length + 2}
  
`;
  values.push(ITEMS_PER_PAGE);
  values.push(offset);
  const res = await client.query(queryText, values);

  return res.rows;

}

export async function fetchJobsPages(query: SearchParams) {
  try {

    let whereClause: string[] = [];
    let values: any[] = [];
    if (query.searchStr) {
      whereClause.push(`job_name LIKE $${values.length + 1}`);
      values.push(`%${query.searchStr}%`);
    }

    if (query.tag) {
      whereClause.push(`tags @> ARRAY[$${values.length + 1}]::TEXT[]`);
      values.push([query.tag]);
    }

    if (query.availability) {
      whereClause.push(`availability = $${values.length + 1}`);
      values.push(Number(query.availability));
    }

    const whereSql = whereClause.length > 0 ? `WHERE ${whereClause.join(' AND ')}` : '';

    const queryText = `
      SELECT
          COUNT(*)
        FROM employmentcenter
        ${whereSql}`;
    const res = await client.query(queryText, values);

    const totalPages = Math.ceil(Number(res.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of employmentcenter.');
  }
}

