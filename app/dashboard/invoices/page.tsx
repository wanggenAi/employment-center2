import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchFilteredJobs, fetchJobsPages } from '@/app/lib/data';
import { SearchParams } from '@/app/lib/definitions';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    tag?: string;
    availability?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query: SearchParams = { searchStr: searchParams?.query, tag: searchParams?.tag, availability: searchParams?.availability }
  const currentPage = Number(searchParams?.page) || 1;
  const [totalPages, jobs] = await Promise.all([
    fetchJobsPages(query),
    fetchFilteredJobs(query, currentPage)
  ]);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Jobs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="flex items-center flex-1">
          <Search placeholder="Search jobs..." />
        </div>
        <div className="flex items-center mt-6">
          <CreateInvoice />
        </div>
      </div>
      <Suspense key={JSON.stringify(query) + currentPage}>
        <Table jobs={jobs} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}