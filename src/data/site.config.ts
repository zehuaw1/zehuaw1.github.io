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
  tagline: `MIT Undergraduate
I think about AI the way a physicist would.`,
  highlightWords: ['AI the way a physicist would'],
  heroTags: ['MIT', 'IPhO Gold', 'RL & Robotics'],
  shortBio:
    "I'm an undergraduate at MIT studying Physics and AI/Decision Making. My research focuses on diffusion models, molecular dynamics, and reinforcement learning for embodied AI.",
  bio: `I'm Zehua Wang (<span class="zh-serif">王泽华</span>), an undergraduate at MIT pursuing a B.S. in Physics and Artificial Intelligence & Decision Making (GPA: 5.0/5.0; expected May 2028). My work sits at the intersection of physics and AI: from reinforcement learning for humanoid control to diffusion models and molecular dynamics.

At MIT, I co-developed Diffusion Accelerants with <a href="https://people.csail.mit.edu/tommi/" target="_blank" rel="noopener noreferrer">Prof. Tommi Jaakkola</a>'s group. At <a href="https://www.fortyfive.ai" target="_blank" rel="noopener noreferrer">FortyFive Labs</a>, advised by Dr. Ge Yang, I worked on reinforcement learning, functional compliance, and sim-to-real humanoid control on Unitree G1 hardware. In summer 2026, I joined Hudson River Trading for rotations in algorithm development and software engineering.

Previously, I worked with Prof. Huazhe Xu at Tsinghua University on learning-based robot manipulation and sim-to-real transfer. Before MIT, I completed preparatory and first-year coursework at Tsinghua's Institute for Interdisciplinary Information Sciences (IIIS). I won a gold medal and placed first in theory at the 54th International Physics Olympiad (IPhO 2024).`,
  profileImage: '/images/profile-waterfront-20260730.webp',
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
      date: 'Sep 2026',
      text: 'Learning Functional Compliance in Whole-body Manipulation was accepted to CoRL 2026.',
      link: 'https://openreview.net/forum?id=wALhOwQWnx',
    },
    {
      date: 'Jul 2026',
      text: 'Contributed a three-commit speech-to-text provider-validation patch now in NousResearch/Hermes Agent\'s main branch.',
      link: '/projects/hermes-agent-contributor',
    },
    {
      date: 'Jul 2026',
      text: 'Presented Diffusion Accelerants as a poster at the SPIGM Workshop at ICML 2026.',
      link: 'https://openreview.net/forum?id=ssjcTBZdQd',
    },
    {
      date: 'May 2026',
      text: 'Joined Hudson River Trading for algorithm development and software engineering rotations.',
    },
    {
      date: 'Feb 2026',
      text: 'Started working with Prof. Tommi Jaakkola\'s group on diffusion models and molecular dynamics.',
    },
    {
      date: 'Dec 2025',
      text: '1st Place at MITIT 2025 Winter Contest (Beginner\'s Round).',
    },
    {
      date: 'Oct 2025',
      text: 'Joined FortyFive Labs (Dr. Ge Yang) to work on reinforcement learning and embodied AI.',
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
      text: 'Gold Medal at IPhO 2024 (1st place in the theoretical round).',
    },
  ],
};

export default siteConfig;
