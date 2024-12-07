'use client';

import { DeleteInvoice, UpdateInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency, } from '@/app/lib/utils';
import { Job } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';

export default function InvoicesTable({
  jobs,
}: {
  jobs: Job[],
}) {

  const { replace } = useRouter();

  const handleRowClick = (job: Job) => {
    replace(`/dashboard/invoices/${job.id}/view`);
  };

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  JobName
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Salary
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Availability
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tags
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  PublishTime
                </th>

              </tr>
            </thead>
            <tbody className="bg-white">
              {jobs?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none 
                    [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg 
                    [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg
                    cursor-pointer hover:bg-blue-100"
                  onClick={() => handleRowClick(invoice)}
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{invoice.job_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.salary)} Month
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.availability} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <div className="flex flex-wrap">
                      {invoice.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 mr-2 mb-2 text-sm font-medium text-white bg-blue-500 rounded-full max-w-xs break-words"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.publishdate)}
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
