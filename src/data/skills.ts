export interface Skill {
  name: string;
  level?: 'expert' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'C++', level: 'proficient' },
    ],
  },
  {
    category: 'ML / Robotics',
    skills: [
      { name: 'PyTorch', level: 'expert' },
      { name: 'MuJoCo', level: 'proficient' },
      { name: 'Isaac Gym', level: 'proficient' },
      { name: 'Isaac Lab', level: 'proficient' },
    ],
  },
  {
    category: 'Systems',
    skills: [
      { name: 'Slurm', level: 'proficient' },
      { name: 'Docker', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'English (Fluent)', level: 'expert' },
      { name: 'Chinese (Native)', level: 'expert' },
    ],
  },
];

export default skills;
