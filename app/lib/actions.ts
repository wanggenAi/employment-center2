'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type Job = {
  id: string;
  job_name: string;
  salary: number;
  availability: number;
  tags: string[];
  publish_date: string;
  job_detail: string;
  contact_us: string;
}

export async function createJob(job: Job) {
  const tagsArray = `{${job.tags.join(',')}}`;
  await sql`
        INSERT INTO employmentcenter (job_name, salary, availability, tags, job_detail, publish_date, contact_us)
        VALUES (${job.job_name}, ${job.salary}, ${job.availability}, ${tagsArray}, ${job.job_detail}, ${job.publish_date}, ${job.contact_us})
        ON CONFLICT (id) DO NOTHING;`
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateJob(job: Job) {
  if (!job.id) {
    throw new Error('Job ID is required for updating.');
  }
  const tagsArray = `{${job.tags.join(',')}}`;
  try {
    await sql`
      UPDATE employmentcenter
      SET 
        job_name = ${job.job_name},
        salary = ${job.salary},
        availability = ${job.availability},
        tags = ${tagsArray}::text[],
        job_detail = ${job.job_detail},
        publish_date = ${job.publish_date},
        contact_us = ${job.contact_us}
      WHERE id = ${job.id};
    `;
    revalidatePath('/dashboard/invoices');
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM employmentcenter WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}