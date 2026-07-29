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
    slug: 'hermes-agent-contributor',
    title: 'Open-Source Contributor, Hermes Agent',
    description:
      'Authored a three-commit speech-to-text provider-validation patch now in main, adding selected-provider and plugin-backend checks plus tests.',
    year: '2026',
    venue: 'NousResearch/Hermes Agent',
    tags: ['Open Source', 'Python', 'Speech-to-Text', 'Plugins'],
    links: [
      {
        label: 'Commits',
        url: 'https://github.com/NousResearch/hermes-agent/commits/main/?author=zehuaw1',
        type: 'code',
      },
      {
        label: 'Review',
        url: 'https://github.com/NousResearch/hermes-agent/pull/41657',
        type: 'other',
      },
    ],
    featured: true,
    longDescription: `I authored a three-commit patch that strengthens speech-to-text provider validation in NousResearch/Hermes Agent. The changes make voice-requirement checks recognize selected providers and plugin-backed speech-to-text implementations, with tests covering the new behavior.

The contribution is now part of the repository's main branch with authorship preserved. The links above lead to the filtered main-branch history and the maintainer review that incorporated the patch.`,
  },
  {
    slug: 'video-real2sim',
    title: 'Video Real2Sim (VR2S)',
    description:
      '6.8300 final project: uses a video model to hallucinate orbital observations from one populated-scene photo, then reconstructs the scene with a pose-free 3D stack.',
    year: '2026',
    venue: 'MIT 6.8300',
    tags: ['Computer Vision', '3D Reconstruction', 'Video Models', 'Real2Sim'],
    links: [
      { label: 'Project Page', url: '/vr2s/', type: 'project' },
    ],
    featured: true,
    longDescription: `Video Real2Sim explores a single-image route to scene reconstruction for populated real-world scenes. Given one photo, the pipeline uses a general video model to synthesize missing orbital observations, then feeds those views into a pose-free reconstruction stack.

The goal is not to claim that video replaces geometry. The project asks a narrower question: when the observed image does not expose the back side, contact regions, or other useful scene evidence, can generated video provide enough additional observations to improve reconstruction? In the final report, the strongest gains appear in perceptual and back-side reconstruction quality, with metric-level caveats and small exceptions surfaced explicitly.

This was my final project for MIT 6.8300 Advances in Computer Vision.`,
  },
  {
    slug: 'humanoid-flow-matching',
    title: 'Fast Humanoid Loco-Manipulation via Flow Matching',
    description:
      'Compared DDPM and Flow Matching for humanoid trajectory synthesis; at five function evaluations, Flow Matching achieved 820 vs. 280 survival steps.',
    year: '2025',
    venue: 'MIT 6.4210',
    tags: ['RL', 'Humanoid Control', 'Flow Matching', 'PyTorch'],
    links: [
      { label: 'Code', url: 'https://github.com/zehuaw1/fm_trajectory', type: 'code' },
      { label: 'Video', url: 'https://youtu.be/MIpTpM4C71k', type: 'video' },
    ],
    featured: true,
    longDescription: `Compared DDPM and Flow Matching for humanoid control via trajectory synthesis. At five function evaluations, Flow Matching achieved 820 vs. 280 survival steps. The project also enabled zero-shot loco-manipulation from walking-only data through test-time classifier guidance.`,
  },
  {
    slug: 'rl-vs-sft-math',
    title: 'RL vs. SFT for Mathematical Reasoning in LLMs',
    description:
      'Implemented GMPO and its evaluation pipeline for a compute-controlled comparison of PPO, GRPO, GMPO, RLOO, and SFT on Qwen3-8B.',
    year: '2025',
    venue: 'MIT 6.4610',
    tags: ['RL', 'LLM', 'Math Reasoning', 'GMPO'],
    links: [
      {
        label: 'Code',
        url: 'https://github.com/qiaosungithub/Qwen-RL-LoRA/tree/zehua/GMPO',
        type: 'code',
      },
      {
        label: 'My Commits',
        url: 'https://github.com/qiaosungithub/Qwen-RL-LoRA/commits/zehua/GMPO/?author=zehuaw1',
        type: 'other',
      },
    ],
    featured: true,
    longDescription: `In an MIT 6.4610 team project, we ran a compute-controlled comparison of PPO, GRPO, GMPO, and RLOO against supervised fine-tuning on Qwen3-8B. My contribution was implementing GMPO and its evaluation pipeline.

GMPO reached 74.2% on GSM8K versus 76.7% for supervised fine-tuning. The named branch and filtered commit history provide direct evidence of my implementation work.`,
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
    longDescription: `Formulated reverse diffusion as MDP with adversarial discriminators, achieving 21.7% FID reduction vs. baseline. Plug-and-play for existing models.`,
  },
  {
    slug: 'paperplay',
    title: 'PaperPlay: Hand-drawn Sketches to Playable Games',
    description:
      'HackMIT 2025: 2nd Place, Modal Prize. Turn hand-drawn sketches into playable physics games with real-time AI commentary.',
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
