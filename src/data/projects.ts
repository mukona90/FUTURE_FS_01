export type Project = {
  id: string
  name: string
  desc: string
  tech: string[]
  status: 'Live' | 'In Dev'
  featured: boolean
  url?: string
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'Accommodation Management System',
    desc: 'Production student-housing platform for One45 on Perth: applications, room allocation, leases, PayFast rent, maintenance jobs, live notifications, and role-based portals for students, residence staff, maintenance, and system admins.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Socket.IO',
      'JWT',
      'Supabase Auth',
      'PayFast',
      'Zod',
      'GraphQL',
      'Vercel',
      'Render',
    ],
    status: 'Live',
    featured: true,
    url: 'https://accommodation-management-system-lyart.vercel.app/',
  },
  {
    id: '02',
    name: 'Shuttles and Tours Management System',
    desc: 'Full-stack booking platform for tour packages and shuttle transfers. Customers book and track trips; admins and drivers manage vehicles, assignments, pricing, and trip status with protected role-based access.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'PostgreSQL', 'JWT', 'REST APIs', 'Socket.IO'],
    status: 'In Dev',
    featured: true,
  },
]
