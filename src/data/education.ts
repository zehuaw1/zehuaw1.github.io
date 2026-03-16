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
    degree: 'B.S.',
    field: 'Physics / Artificial Intelligence & Decision Making',
    startYear: '2025',
    endYear: 'present',
    location: 'Cambridge, MA',
    gpa: '5.0/5.0',
    notes: [
      'FortyFive AI Lab (Dr. Ge Yang) — RL, humanoid whole-body control, embodied AI',
      "Prof. Tommi Jaakkola's group — diffusion models and molecular dynamics",
    ],
  },
  {
    institution: 'Tsinghua University — IIIS (Yao Class)',
    degree: 'Undergraduate',
    field: 'Computer Science',
    startYear: '2024',
    endYear: '2025',
    location: 'Beijing, China',
    gpa: '3.95/4.00',
    advisor: 'Prof. Huazhe Xu',
    notes: [
      'Transferred to MIT after freshman year',
      'Research on learning-based robot manipulation, sim-to-real transfer',
    ],
  },
];

export default education;
