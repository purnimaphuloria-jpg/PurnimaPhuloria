import { SchoolEvent } from '../types';

export const mockEvents: SchoolEvent[] = [
  {
    id: '1',
    title: 'Parent Teacher Meeting (PTM)',
    description: 'Quarterly review of student progress and academic performance. Parents are requested to attend as per the scheduled slots.',
    date: new Date(2026, 3, 25), // April 25, 2026
    category: 'PTM',
    location: 'Main Auditorium & Classrooms',
    isImportant: true,
  },
  {
    id: '2',
    title: 'Annual Sports Day',
    description: 'A day filled with athletic competitions, team spirit, and sportsmanship. Students from all houses will participate.',
    date: new Date(2026, 4, 10), // May 10, 2026
    category: 'Sports',
    location: 'School Ground',
    isImportant: true,
  },
  {
    id: '3',
    title: 'Science & Art Exhibition',
    description: 'Showcasing the creative and scientific projects developed by our students throughout the semester.',
    date: new Date(2026, 3, 30), // April 30, 2026
    category: 'Academic',
    location: 'Exhibition Hall',
  },
  {
    id: '4',
    title: 'Summer Vacation Starts',
    description: 'School will remain closed for summer break. Enjoy your holidays!',
    date: new Date(2026, 5, 1), // June 1, 2026
    category: 'Holiday',
    isImportant: true,
  },
  {
    id: '5',
    title: 'Inter-School Debate Competition',
    description: 'Our school is hosting the regional inter-school debate competition. Best of luck to our participants!',
    date: new Date(2026, 4, 5), // May 5, 2026
    category: 'Cultural',
    location: 'Seminar Room',
  },
  {
    id: '6',
    title: 'Final Term Examinations',
    description: 'Annual examinations for all grades. Please refer to the detailed date sheet sent via email.',
    date: new Date(2026, 2, 15), // March 15, 2026 (Past for context)
    category: 'Academic',
    isImportant: true,
  },
  {
    id: '7',
    title: 'Music & Dance Night',
    description: 'An evening celebrating the performing arts with performances by our talented students.',
    date: new Date(2026, 4, 20), // May 20, 2026
    category: 'Cultural',
    location: 'Open Air Theater',
  }
];
