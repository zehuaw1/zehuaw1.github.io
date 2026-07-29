export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  gpa?: string;
  advisor?: string;
  notes?: string[];
}

const education: Education[] = [
  {
    institution: 'Massachusetts Institute of Technology',
    degree: 'B.S. Candidate',
    field: 'Physics and Artificial Intelligence and Decision Making',
    startYear: '2025',
    endYear: 'May 2028',
    location: 'Cambridge, MA',
    gpa: '5.0/5.0',
  },
  {
    institution: 'Tsinghua University',
    degree: 'Preparatory Program and First-Year Coursework',
    field: 'Institute for Interdisciplinary Information Sciences (IIIS)',
    startYear: 'Aug 2024',
    endYear: 'Jul 2025',
    location: 'Beijing, China',
    gpa: '3.95/4.00',
  },
];

export default education;
