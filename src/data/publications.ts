export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  abstract: string;
  links: {
    paper?: string;
    code?: string;
    project?: string;
    video?: string;
  };
  bibtex: string;
  highlight?: boolean;
}

const publications: Publication[] = [
  {
    id: 'causal-rl-2026',
    title: 'Causal Offline Reinforcement Learning for Dexterous Manipulation',
    authors: ['Alex Chen', 'Leslie Kaelbling', 'Tomás Lozano-Pérez'],
    venue: 'ICRA 2026',
    year: 2026,
    type: 'conference',
    abstract:
      'We present CausalRL, a causal-graph-augmented offline RL algorithm that leverages structural causal models to identify and exploit causal relationships between state variables, achieving 3× improved sample efficiency on D4RL benchmarks and successful sim-to-real transfer on dexterous manipulation tasks.',
    links: {
      paper: 'https://arxiv.org/abs/2501.12345',
      code: 'https://github.com/alexchen-mit/causal-rl',
      project: '/projects/causal-offline-rl',
    },
    bibtex: `@inproceedings{chen2026causalrl,
  title={Causal Offline Reinforcement Learning for Dexterous Manipulation},
  author={Chen, Alex and Kaelbling, Leslie and Lozano-P{\\'e}rez, Tom{\\'a}s},
  booktitle={2026 IEEE International Conference on Robotics and Automation (ICRA)},
  year={2026},
  organization={IEEE}
}`,
    highlight: true,
  },
  {
    id: 'grip-2025',
    title: 'GRIP: Generalizable Robot Interaction Primitives via Compositional Diffusion Policies',
    authors: ['Alex Chen', 'Pulkit Agrawal', 'Leslie Kaelbling'],
    venue: 'CoRL 2025',
    year: 2025,
    type: 'conference',
    abstract:
      'We introduce GRIP, a framework for learning a compositional library of dexterous manipulation primitives as conditional diffusion policies. GRIP enables zero-shot generalization to novel object categories and can be composed by a task-level planner to solve complex multi-step manipulation tasks.',
    links: {
      paper: 'https://arxiv.org/abs/2410.56789',
      code: 'https://github.com/alexchen-mit/grip',
      project: '/projects/grip',
      video: 'https://youtu.be/grip-demo',
    },
    bibtex: `@inproceedings{chen2025grip,
  title={{GRIP}: Generalizable Robot Interaction Primitives via Compositional Diffusion Policies},
  author={Chen, Alex and Agrawal, Pulkit and Kaelbling, Leslie},
  booktitle={Conference on Robot Learning (CoRL)},
  year={2025}
}`,
    highlight: true,
  },
  {
    id: 'tamp-2024',
    title: 'Belief-Space Task and Motion Planning for Robust Manipulation Under Uncertainty',
    authors: ['Alex Chen', 'Leslie Kaelbling', 'Tomás Lozano-Pérez'],
    venue: 'ICRA 2024',
    year: 2024,
    type: 'conference',
    abstract:
      'We present BelTAMP, a probabilistic task and motion planning framework that maintains particle-filter belief distributions over object states and physical parameters, enabling generation of contingent plans that are robust to perception and model uncertainty.',
    links: {
      paper: 'https://arxiv.org/abs/2309.99999',
      code: 'https://github.com/alexchen-mit/beltamp',
      video: 'https://youtu.be/beltamp-demo',
    },
    bibtex: `@inproceedings{chen2024beltamp,
  title={Belief-Space Task and Motion Planning for Robust Manipulation Under Uncertainty},
  author={Chen, Alex and Kaelbling, Leslie and Lozano-P{\\'e}rez, Tom{\\'a}s},
  booktitle={2024 IEEE International Conference on Robotics and Automation (ICRA)},
  year={2024},
  organization={IEEE}
}`,
    highlight: false,
  },
  {
    id: 'sim2real-2024',
    title: 'Bridging the Sim-to-Real Gap for Dexterous Manipulation via Adaptive Domain Randomization',
    authors: ['Alex Chen', 'Jie Xu', 'Wojciech Matusik'],
    venue: 'IEEE Robotics and Automation Letters (RA-L)',
    year: 2024,
    type: 'journal',
    abstract:
      'We develop a systematic domain randomization curriculum combined with a learned dynamics adapter for transferring dexterous manipulation policies from MuJoCo simulation to a physical Shadow Dexterous Hand, achieving 85% success on in-hand rotation without real-world fine-tuning.',
    links: {
      paper: 'https://arxiv.org/abs/2407.88888',
      video: 'https://youtu.be/shadow-demo',
    },
    bibtex: `@article{chen2024sim2real,
  title={Bridging the Sim-to-Real Gap for Dexterous Manipulation via Adaptive Domain Randomization},
  author={Chen, Alex and Xu, Jie and Matusik, Wojciech},
  journal={IEEE Robotics and Automation Letters},
  year={2024},
  publisher={IEEE}
}`,
    highlight: false,
  },
  {
    id: 'robotclr-2022',
    title: 'Physics-Informed Contrastive Pre-Training for Robot State Representations',
    authors: ['Alex Chen', 'Ruslan Salakhutdinov'],
    venue: 'ICML 2022',
    year: 2022,
    type: 'conference',
    abstract:
      'We propose RobotCLR, a contrastive learning framework for structured robotic state spaces using physics-informed augmentations. The learned representations improve downstream policy learning by 40% across 8 manipulation tasks in both imitation learning and RL settings.',
    links: {
      paper: 'https://arxiv.org/abs/2205.11111',
      code: 'https://github.com/alexchen-mit/robot-clr',
    },
    bibtex: `@inproceedings{chen2022robotclr,
  title={Physics-Informed Contrastive Pre-Training for Robot State Representations},
  author={Chen, Alex and Salakhutdinov, Ruslan},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2022},
  organization={PMLR}
}`,
    highlight: false,
  },
];

export default publications;
