import connectDB from '@/lib/db';
import Application, { IApplication } from '@/models/Application';

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  await connectDB();

  // Await searchParams before using it
  const params = await searchParams; 
  const page = parseInt(params?.page || '1', 10);
  const limit = 10; // Number of applications per page

  // Fetch paginated applications from MongoDB
  const result = await Application.paginate(
    {}, 
    { page, limit, sort: { createdAt: -1 } }
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Job Applications</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CV</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {result.docs.map((application: IApplication) => (
                <tr key={application._id.toString()}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <a href={application.cv} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">
                      View CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-700">
              Showing <span className="font-medium">{result.docs.length}</span> of{' '}
              <span className="font-medium">{result.totalDocs}</span> applications
            </span>
          </div>
          <div className="flex space-x-2">
            <a
              href={`/applications?page=${result.prevPage}`}
              className={`px-4 py-2 bg-gray-200 rounded-md ${
                !result.hasPrevPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
              }`}
            >
              Previous
            </a>
            <a
              href={`/applications?page=${result.nextPage}`}
              className={`px-4 py-2 bg-gray-200 rounded-md ${
                !result.hasNextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
              }`}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
