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
      { name: 'Python (PyTorch)', level: 'expert' },
      { name: 'C++', level: 'proficient' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'LaTeX', level: 'proficient' },
      { name: 'Git', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'MuJoCo', level: 'proficient' },
      { name: 'Isaac Gym/Lab', level: 'familiar' },
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
