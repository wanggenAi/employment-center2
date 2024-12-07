import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchJobsById } from '@/app/lib/data';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import DownloadButtion from '@/app/ui/invoices/download-button'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const job = await fetchJobsById(id);

    
    return (
        <main className="max-w-1xl mx-auto p-2">
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: `/dashboard/invoices` },
                    {
                        label: 'View job detail',
                        href: `/dashboard/invoices/${id}/view`,
                        active: true,
                    },
                ]}
            />

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Job Name</h3>
                    <p className="text-lg text-gray-600">{job.job_name}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Salary</h3>
                    <p className="text-lg text-gray-600">{formatCurrency(job.salary)} Month</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Recruitment status</h3>
                    <p className={`text-lg font-semibold ${job.availability === 1 ? 'text-green-600' : 'text-gray-600'}`}>
                        {job.availability === 1 ? 'Hot recruitment' : 'Closed'}
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Publish date</h3>
                    <p className="text-lg text-gray-600">{formatDateToLocal(job.publishdate)}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Job description</h3>
                    <p className="text-lg text-gray-600">{job.job_detail}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact us</h3>
                    <p className="text-lg text-gray-600">{job.contact_us}</p>
                </div>
            </div>

            {/* Download Button */}
            <div className="mt-6">
                <DownloadButtion job={job} />
            </div>
        </main>
    );
}
