export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  bullets?: string[];
}

const experience: Experience[] = [
  {
    role: 'Software Engineering Intern',
    organization: 'Hudson River Trading',
    startDate: 'May 2026',
    endDate: 'Aug 2026',
    location: 'New York, NY',
    bullets: [
      'Two rotations: Software Engineering (5 weeks) and Algorithmic Trading (5 weeks).',
    ],
  },
  {
    role: 'Undergraduate Researcher — Diffusion Models & Molecular Dynamics',
    organization: 'MIT, supervised by Prof. Tommi Jaakkola',
    startDate: 'Feb 2026',
    endDate: 'Present',
    location: 'Cambridge, MA',
    bullets: [
      'Researching the intersection of diffusion models and molecular dynamics.',
    ],
  },
  {
    role: 'Undergraduate Researcher — Reinforcement Learning & Embodied AI',
    organization: 'FortyFive AI Lab, MIT, supervised by Dr. Ge Yang',
    startDate: 'Oct 2025',
    endDate: 'Present',
    location: 'Cambridge, MA',
    bullets: [
      'Developing RL and imitation learning pipelines for humanoid whole-body control; investigating scaling laws for policy performance and generalization.',
      'Contributed to productionization of Vuer (3D visualization) and ML-Dash (experiment tracking & data storage).',
    ],
  },
  {
    role: 'Undergraduate Researcher — Learning-based Control',
    organization: 'Tsinghua University, supervised by Prof. Huazhe Xu',
    startDate: 'Mar 2025',
    endDate: 'Aug 2025',
    location: 'Beijing, China',
    bullets: [
      'Investigated RIR (RL to Imitation to Real-world) framework for robot manipulation on Franka arm, leveraging PPO and DrQ-v2.',
      'Designed multi-stage approach for specialist training and multitask generalization via imitation learning and sim-to-real transfer.',
    ],
  },
];

export default experience;
