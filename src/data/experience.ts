export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  bullets?: string[];
  links?: { label: string; url: string }[];
}

const experience: Experience[] = [
  {
    role: 'Sophomore Intern: Algorithm Development & Software Engineering',
    organization: 'Hudson River Trading',
    startDate: 'May 2026',
    endDate: 'Aug 2026',
    location: 'New York, NY',
    bullets: [
      'Developed and live-tested a trading strategy during the Algorithm Development rotation.',
      "Contributed enhancements to internal developer tooling in HRT's codebase during the Software Engineering rotation.",
    ],
  },
  {
    role: 'Undergraduate Researcher: Diffusion Models & Molecular Dynamics',
    organization: 'MIT · Advisor: Tommi Jaakkola',
    startDate: 'Feb 2026',
    endDate: 'May 2026',
    location: 'Cambridge, MA',
    bullets: [
      'Co-developed Diffusion Accelerants, a non-Markovian biasing method that augments molecular dynamics with learned measure transport.',
    ],
  },
  {
    role: 'Undergraduate Researcher: Reinforcement Learning & Embodied AI',
    organization: 'FortyFive Labs · Advisor: Ge Yang',
    startDate: 'Oct 2025',
    endDate: 'Apr 2026',
    location: 'Cambridge, MA',
    bullets: [
      'Developed a whole-body control policy for functional compliance, combining explicit force estimation with directional, time-varying stiffness profiles at deployment.',
      'Ran parallel RL and imitation-learning experiments across nearly 100 NVIDIA RTX PRO 6000 GPUs; performed extensive sim-to-real deployment, debugging, and policy iteration on Unitree G1 hardware.',
    ],
  },
  {
    role: 'Undergraduate Researcher: Learning-based Control',
    organization: 'Tsinghua University · Advisor: Huazhe Xu',
    startDate: 'Mar 2025',
    endDate: 'Aug 2025',
    location: 'Beijing, China',
    bullets: [
      'Developed a multistage RIR (RL-to-imitation-to-real-world) pipeline for Franka manipulation, combining PPO/DrQ-v2 specialists, multitask imitation learning, and sim-to-real transfer.',
    ],
  },
];

export default experience;
