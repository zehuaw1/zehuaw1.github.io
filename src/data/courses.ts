export interface Course {
  code: string;
  title: string;
  institution: string;
}

export interface CourseCategory {
  category: string;
  courses: Course[];
}

const courses: CourseCategory[] = [
  {
    category: 'ML/AI',
    courses: [
      { code: '6.7970/8.750', title: 'Symmetry & Applications to ML', institution: 'MIT' },
      { code: '6.8300', title: 'Advances in Computer Vision', institution: 'MIT' },
      { code: '6.4210', title: 'Robotic Manipulation', institution: 'MIT' },
      { code: '6.4610', title: 'Natural Language Processing', institution: 'MIT' },
      { code: '6.4300', title: 'Computer Vision', institution: 'MIT' },
      { code: '', title: 'Deep Learning', institution: 'Tsinghua' },
      { code: '6.3800', title: 'Intro to Inference', institution: 'MIT' },
      { code: '6.3900', title: 'Intro to Machine Learning', institution: 'MIT' },
    ],
  },
  {
    category: 'Math/Physics',
    courses: [
      { code: '18.435', title: 'Quantum Computation', institution: 'MIT' },
      { code: '8.05', title: 'Quantum Physics II', institution: 'MIT' },
      { code: '8.13', title: 'Experimental Physics I', institution: 'MIT' },
      { code: '6.1220', title: 'Design & Analysis of Algorithms', institution: 'MIT' },
      { code: '', title: 'Mathematics for CS and AI', institution: 'Tsinghua' },
    ],
  },
];

export default courses;
