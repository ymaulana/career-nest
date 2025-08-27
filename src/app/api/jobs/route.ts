import { NextResponse } from 'next/server';

const mockJobs = [
  {
    id: 1,
    title: 'Junior Frontend Developer',
    company: 'TechStart',
    location: 'Remote',
    description: 'Work with React & Tailwind to build UI components.',
    applyUrl: 'https://techstart.com/apply/frontend',
    // createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Entry-Level Backend Engineer',
    company: 'CodeWorks',
    location: 'Remote',
    description: 'Assist in building APIs using Node.js & Prisma.',
    applyUrl: 'https://codeworks.com/apply/backend',
    // createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(mockJobs);
}
