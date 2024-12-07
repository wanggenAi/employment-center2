// components/DownloadButton.tsx
'use client';

import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import {
    Job,
  } from '@/app/lib/definitions';

export default function DownloadButtion({ job }: { job: Job }) {
    // Function to generate and download the .txt file

    const downloadJobDetails = () => {
        const jobContent = `
          Job Name: ${job.job_name}
          Salary: ${formatCurrency(job.salary)}
          Recruitment Status: ${job.availability === 1 ? 'Hot recruitment' : 'Closed'}
          Publish Date: ${formatDateToLocal(job.publishdate)}
          Job Description: ${job.job_detail}
          Contact us: ${job.contact_us}
      `;

        const blob = new Blob([jobContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${job.job_name}_details.txt`;
        link.click();
        URL.revokeObjectURL(url); // Clean up the URL object
    };

    return (
        <button
            onClick={downloadJobDetails}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Download Job Details
        </button>
    );
};
