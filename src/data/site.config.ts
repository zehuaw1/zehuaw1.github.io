export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  tagline: string;
  highlightWords: string[];
  heroTags: string[];
  bio: string;
  shortBio: string;
  profileImage: string;
  cvUrl: string;
  socials: SocialLink[];
  researchInterests: string[];
  beyondAcademics: string;
  news: NewsItem[];
}

export interface NewsItem {
  date: string;
  text: string;
  link?: string;
}

const siteConfig: SiteConfig = {
  name: 'Zehua Wang',
  title: 'Zehua Wang',
  description:
    'MIT undergraduate in Physics & AI. IPhO 2024 Gold Medalist (1st in Theory). Research in reinforcement learning, humanoid control, and embodied AI.',
  url: 'https://zehuaw1.github.io',
  email: 'zehuaw@mit.edu',
  tagline: `Sophomore @ MIT
I think about AI the way a physicist would.`,
  highlightWords: ['AI the way a physicist would'],
  heroTags: ['MIT', 'IPhO Gold', 'RL & Robotics'],
  shortBio:
    "I'm an undergraduate at MIT studying Physics and AI/Decision Making. My research focuses on reinforcement learning, humanoid whole-body control, and sim-to-real transfer at the FortyFive AI Lab.",
  bio: `I'm Zehua Wang (<span class="zh-serif">王泽华</span>), an undergraduate at MIT pursuing a B.S. in Physics and Artificial Intelligence & Decision Making (GPA: 5.0/5.0). My work sits at the intersection of physics and AI — from reinforcement learning for humanoid control, to diffusion models and molecular dynamics.

I currently work with <a href="https://people.csail.mit.edu/tommi/" target="_blank" rel="noopener noreferrer">Prof. Tommi Jaakkola</a> on diffusion models and molecular dynamics, and at the <a href="https://www.fortyfive.ai" target="_blank" rel="noopener noreferrer">FortyFive AI Lab</a> (Dr. Ge Yang) on RL and imitation learning for humanoid whole-body control and scaling laws for embodied AI.

Previously, I worked with Prof. Huazhe Xu at Tsinghua University on learning-based robot manipulation and sim-to-real transfer. Before MIT, I completed my freshman year at Tsinghua's Institute for Interdisciplinary Information Sciences (IIIS, Yao Class). I was the 1st place winner in the theoretical round at the 54th International Physics Olympiad (IPhO 2024) and earned 3rd place at the Romanian Master of Physics 2023.`,
  profileImage: '/images/profile.jpeg',
  cvUrl: '/files/cv_zehua_wang.pdf',
  socials: [
    { platform: 'github', url: 'https://github.com/zehuaw1', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/zehua-wang-36058a381/', label: 'LinkedIn' },
    { platform: 'email', url: 'mailto:zehuaw@mit.edu', label: 'Email' },
  ],
  researchInterests: [
    'Reinforcement Learning',
    'Humanoid Whole-Body Control',
    'Sim-to-Real Transfer',
    'Imitation Learning',
    'Scaling Laws for Embodied AI',
    'Generative Models',
    'Diffusion Models',
  ],
  beyondAcademics: `Outside of research, I'm into basketball (led the IIIS team as a freshman), skiing (10+ years), and lifting. I also enjoy soccer, volleyball, table tennis, swimming, and hiking. In my spare time, I listen to music and occasionally sing.`,
  news: [
    {
      date: 'Feb 2026',
      text: 'Started working with Prof. Tommi Jaakkola on diffusion models & molecular dynamics.',
    },
    {
      date: 'Dec 2025',
      text: '1st Place at MITIT 2025 Winter Contest (Beginner\'s Round).',
    },
    {
      date: 'Oct 2025',
      text: 'Joined the FortyFive AI Lab (Dr. Ge Yang) — RL & embodied AI.',
    },
    {
      date: 'Sep 2025',
      text: '2nd Place at HackMIT 2025 (Modal Prize) with PaperPlay.',
      link: '/projects/paperplay',
    },
    {
      date: 'Aug 2025',
      text: 'Started sophomore year at MIT.',
    },
    {
      date: 'Jul 2024',
      text: 'Gold Medal at IPhO 2024 — 1st place in the theoretical round.',
    },
  ],
};

export default siteConfig;
