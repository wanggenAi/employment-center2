// pages/employment/new.js
"use client";

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { createJob } from '@/app/lib/actions';

// 动态导入 react-select 并禁用 SSR
const ReactSelect = dynamic(() => import('react-select/creatable'), { ssr: false });

export default function Form() {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const onSubmit = async (data: any) => {
    // Prepare tags as an array of strings
    data.tags = data.tags.map((tag: { value: any; }) => tag.value);
    
    await createJob(data)

    try {
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl w-full space-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-white p-8 rounded shadow">
          {/* Job Name */}
          <div>
            <label htmlFor="job_name" className="block text-sm font-medium text-gray-700">
              Job Name
            </label>
            <input
              id="job_name"
              type="text"
              {...register('job_name', { required: true })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.job_name ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
              placeholder="e.g., Software Engineer"
            />
            {errors.job_name && <p className="mt-1 text-sm text-red-600">Job Name is required.</p>}
          </div>

          {/* Salary */}
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary (USD)
            </label>
            <input
              id="salary"
              type="number"
              {...register('salary', { required: true, min: 0 })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.salary ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
              placeholder="e.g., 120000"
            />
            {errors.salary && <p className="mt-1 text-sm text-red-600">Please enter a valid salary.</p>}
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <select
              id="availability"
              {...register('availability', { required: true })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.availability ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
            >
              <option value="">Select Availability</option>
              <option value="1">Available</option>
              <option value="0">Not Available</option>
            </select>
            {errors.availability && <p className="mt-1 text-sm text-red-600">Please select availability.</p>}
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <Controller
              control={control}
              name="tags"
              rules={{ required: true }}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  isMulti
                  components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                  placeholder="Enter tags (e.g., React, Node.js)"
                  onChange={(val) => field.onChange(val)}
                  className="mt-1"
                />
              )}
            />
            {errors.tags && <p className="mt-1 text-sm text-red-600">Please enter at least one tag.</p>}
          </div>

          {/* Publish Date */}
          <div>
            <label htmlFor="publishdate" className="block text-sm font-medium text-gray-700">
              Publish Date
            </label>
            <input
              defaultValue={getTodayDate()}
              id="publishdate"
              type="date"
              {...register('publish_date', { required: true })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.publish_date ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
            />
            {errors.publish_date && <p className="mt-1 text-sm text-red-600">Publish Date is required.</p>}
          </div>

          {/* Job Detail */}
          <div>
            <label htmlFor="job_detail" className="block text-sm font-medium text-gray-700">
              Job Detail
            </label>
            <textarea
              id="job_detail"
              {...register('job_detail', { required: true })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.job_detail ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
              rows={6}
              placeholder="Provide detailed job description..."
            ></textarea>
            {errors.job_detail && <p className="mt-1 text-sm text-red-600">Job Detail is required.</p>}
          </div>

          {/* Contact Us */}
          <div>
            <label htmlFor="contact_us" className="block text-sm font-medium text-gray-700">
              Contact Us (Email | Phone)
            </label>
            <input
              id="contact_us"
              type="text"
              {...register('contact_us', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+\s\|\s\+?[0-9\-]{10,20}$/,
                  message: "Format: email@example.com | +1234567890"
                }
              })}
              className={`mt-1 block w-full shadow-sm sm:text-sm border 
                ${errors.contact_us ? 'border-red-500' : 'border-gray-300'}
                rounded-md`}
              placeholder="e.g., hr@company.com | +1234567890"
            />
            {errors.contact_us && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contact_us.type === 'pattern'
                  ? "Format: email@example.com | +1234567890"
                  : "Contact information is required."}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              Submit
            </button>
          </div>

          {/* Submission Status */}
          {submitStatus === 'error' && (
            <p className="mt-2 text-center text-red-600">Failed to post the job. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
