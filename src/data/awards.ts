export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
  highlight?: boolean;
}

const awards: Award[] = [
  {
    title: 'Gold Medal (1st in Theory)',
    organization: '54th International Physics Olympiad (IPhO)',
    year: '2024',
    description: 'Highest score in the theoretical exam among all participants worldwide.',
    highlight: true,
  },
  {
    title: '1st Place, Winter Contest Beginner\'s Round',
    organization: 'MIT Informatics Tournament (MITIT) 2025',
    year: '2025',
  },
  {
    title: '2nd Place, Modal Prize',
    organization: 'HackMIT 2025',
    year: '2025',
    highlight: true,
  },
  {
    title: 'Xuetangban Scholarship & Freshman Scholarship',
    organization: 'Tsinghua University',
    year: '2024',
  },
];

export default awards;
