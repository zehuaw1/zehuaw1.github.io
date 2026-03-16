export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  venue?: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
  thumbnail?: string;
  content?: string;
  longDescription?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'code' | 'paper' | 'demo' | 'video' | 'project' | 'other';
}

const projects: Project[] = [
  {
    slug: 'humanoid-flow-matching',
    title: 'Fast Humanoid Loco-Manipulation via Flow Matching',
    description:
      'Flow Matching achieves 820 vs. 280 survival steps over DDPM at 5-NFE. Zero-shot loco-manipulation from walking-only data via classifier guidance.',
    year: '2025',
    venue: 'MIT 6.4210',
    tags: ['RL', 'Humanoid Control', 'Flow Matching', 'PyTorch'],
    links: [
      { label: 'Code', url: 'https://github.com/zehuaw1/fm_trajectory', type: 'code' },
      { label: 'Video', url: 'https://youtu.be/MIpTpM4C71k', type: 'video' },
    ],
    featured: true,
    longDescription: `Compared DDPM and Flow Matching for humanoid control via trajectory synthesis, achieving faster inference with FM. At 5-NFE, FM achieves 820 vs. 280 survival steps. Zero-shot loco-manipulation from walking-only data via test-time classifier guidance.`,
  },
  {
    slug: 'rl-vs-sft-math',
    title: 'RL vs. SFT for Mathematical Reasoning in LLMs',
    description:
      'GMPO achieves 74.2% on GSM8K (vs. SFT 76.7%), demonstrating RL can match SFT without step-by-step supervision.',
    year: '2025',
    venue: 'MIT 6.4610',
    tags: ['RL', 'LLM', 'Math Reasoning', 'GMPO'],
    links: [
      { label: 'Code', url: 'https://github.com/qiaosungithub/Qwen-RL-LoRA', type: 'code' },
    ],
    featured: true,
    longDescription: `Compute-controlled comparison of PPO, GRPO, GMPO, RLOO against SFT on Qwen3-8B. GMPO achieves 74.2% on GSM8K (vs. SFT 76.7%), demonstrating RL can match SFT without step-by-step supervision.`,
  },
  {
    slug: 'diffusion-rl-adversarial',
    title: 'Enhancing Diffusion Models with RL & Adversarial Rewards',
    description:
      '21.7% FID reduction via RL fine-tuning with adversarial reward signals. Plug-and-play for existing models.',
    year: '2025',
    tags: ['Diffusion Models', 'RL', 'Image Generation'],
    links: [
      { label: 'Code & Report', url: 'https://github.com/HACLINE/DiffPPOGAN', type: 'code' },
    ],
    featured: true,
    longDescription: `Formulated reverse diffusion as MDP with adversarial discriminators, achieving 21.7% FID reduction vs. baseline. Plug-and-play for existing models.`,
  },
  {
    slug: 'paperplay',
    title: 'PaperPlay: Hand-drawn Sketches to Playable Games',
    description:
      'HackMIT 2025 — 2nd Place Modal Prize. Turn hand-drawn sketches into playable physics games with real-time AI commentary.',
    year: '2025',
    venue: 'HackMIT 2025',
    tags: ['OpenCV', 'Physics Engine', 'AI', 'Hackathon'],
    links: [
      { label: 'Demo', url: 'https://demo-description.vercel.app/', type: 'demo' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=QjamuTbkZdQ', type: 'video' },
    ],
    longDescription: `Built system turning hand-drawn sketches into playable physics-based games using OpenCV, a physics engine, and real-time AI commentary. Won 2nd Place Modal Prize at HackMIT 2025.`,
  },
  {
    slug: 'clevam-dm',
    title: 'Consistent Local Video Editing via Attention Manipulation',
    description:
      'Training-free framework for local video editing using BrushNet inpainting, DDIM inversion, and PerVFI for temporal coherence.',
    year: '2025',
    tags: ['Video Editing', 'Diffusion Models', 'Attention'],
    links: [
      { label: 'Code & Report', url: 'https://github.com/zehuaw1/CLEVAM-DM', type: 'code' },
    ],
    longDescription: `Training-free framework for local video editing using BrushNet inpainting, DDIM inversion, and PerVFI for temporal coherence.`,
  },
  {
    slug: 'daily-papers',
    title: 'Daily Papers: Personalized ArXiv Research Digest',
    description:
      'Agentic LLM pipeline for autonomous paper discovery with multi-step relevance filtering, ranking, and summarization.',
    year: '2025',
    tags: ['LLM', 'ArXiv', 'Automation'],
    links: [
      { label: 'Code', url: 'https://github.com/zehuaw1/daily-papers', type: 'code' },
    ],
    longDescription: `Agentic LLM pipeline for autonomous paper discovery: multi-step relevance filtering, ranking, and summarization over arXiv/HuggingFace feeds with automated email delivery.`,
  },
  {
    slug: 'k-center',
    title: 'Algorithm Design for the Metric k-Center Problem',
    description:
      'Survey and evaluation framework. Proposed algorithms achieving empirical approximation ratio 1.049 (vs. SCR 1.064).',
    year: '2024',
    tags: ['Algorithms', 'Optimization', 'Theory'],
    links: [
      { label: 'Code & Survey', url: 'https://github.com/zehuaw1/k-Center_Evaluation', type: 'code' },
    ],
    longDescription: `Authored survey and evaluation framework. Proposed algorithms achieving empirical approximation ratio 1.049 (vs. SCR 1.064).`,
  },
];

export default projects;
