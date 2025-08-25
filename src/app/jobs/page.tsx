import Link from 'next/link';

type JobType = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applyUrl: string;
  // createdAt: string;
};

async function getJobs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`, {
    cache: 'no-store', // or revalidate: 60 if you want caching
  });
  return res.json();
}

export default async function JobFeedPage() {
  // const [jobs, setJobs] = useState<JobType[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchJobs() {
  //     try {
  //       const response = await fetch('/api/jobs');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch jobs');
  //       }
  //       const data: JobType[] = await response.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.error('Error fetching jobs:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchJobs();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const jobs: JobType[] = await getJobs();

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-6'>Available Jobs</h1>
      <ul className='space-y-4'>
        {jobs.map((job) => (
          <li
            key={job.id}
            className='p-4 border rounded-lg shadow-sm hover:shadow-md transition'
          >
            <h2 className='text-xl font-semibold'>{job.title}</h2>
            <p className='text-gray-600'>
              {job.company} • {job.location}
            </p>
            <Link
              href={`/jobs/${job.id}`}
              className='text-indigo-600 hover:underline mt-2 block'
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
