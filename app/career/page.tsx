// pages/careers.tsx
import type { NextPage } from 'next';
import Link from 'next/link';

const Careers: NextPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
<div className=" bg-gray-100">

<div className="bg-white pt-28">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Ready to dive in?</span>
      <span className="block text-indigo-600">Start your career with us today.</span>
    </h2>
  </div>
</div>

{/* Open Positions Section */}
<div id="open-positions" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl font-extrabold text-gray-900">Open Positions</h2>
  <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
    {/* Job Card */}
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Software Engineer</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Full-time</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Dhaka, Bangladesh</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Negotiable</dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-4 bg-gray-50 sm:px-6">
        <Link
          href="/apply"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Apply now<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>

    {/* Repeat Job Card for other positions */}
  </div>
</div>
</div>
    </div>
  );
};

export default Careers;