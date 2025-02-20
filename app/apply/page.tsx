// app/apply/page.tsx
'use client'; // Mark this as a Client Component

import { useForm, SubmitHandler } from 'react-hook-form';
import { submitApplication } from './actions';
import { useState } from 'react';

interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  cv: FileList; // Use 'cv' instead of 'resume'
}

export default function ApplyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationForm>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ApplicationForm> = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position', data.position);
    formData.append('cv', data.cv[0]); // Use 'cv' instead of 'resume'

    const result = await submitApplication(formData);
    if (result.success) {
      alert('Application submitted successfully!');
    } else {
      alert('Failed to submit application. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Apply Now</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Position Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Position</label>
            <input
              {...register('position', { required: 'Position is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
          </div>

          {/* CV Upload Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload CV (PDF or Word)</label>
            <input
              type="file"
              {...register('cv', { required: 'CV is required' })}
              accept=".pdf,.doc,.docx"
              className="mt-1 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}