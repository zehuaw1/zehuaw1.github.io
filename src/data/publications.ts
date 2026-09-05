export interface PublicationAuthor {
  name: string;
  equalContribution?: boolean;
}

export interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: string;
  status: string;
  links?: PublicationLink[];
  note?: string;
}

const publications: Publication[] = [
  {
    title: 'Learning Functional Compliance in Whole-body Manipulation',
    authors: [
      { name: 'Gio Huh', equalContribution: true },
      { name: 'Yue Zhuo', equalContribution: true },
      { name: 'Zehua Wang', equalContribution: true },
      { name: 'Alan Yu' },
      { name: 'Yibo Cheng' },
      { name: 'Yanbing Han' },
      { name: 'Gabriel B. Margolis' },
      { name: 'Ge Yang' },
    ],
    venue: 'Conference on Robot Learning (CoRL)',
    year: '2026',
    status: 'Accepted paper',
    links: [
      {
        label: 'OpenReview',
        url: 'https://openreview.net/forum?id=wALhOwQWnx',
      },
    ],
    note: '* Equal contribution.',
  },
  {
    title: 'Diffusion Accelerants: Towards Augmenting Molecular Dynamics with Learned Measure Transport',
    authors: [
      { name: 'Bowen Jing' },
      { name: 'Zehua Wang' },
      { name: 'Paul Gutkovich' },
      { name: 'Peter Holderrieth' },
      { name: 'Tommi Jaakkola' },
    ],
    venue: 'SPIGM Workshop at ICML 2026',
    year: '2026',
    status: 'Poster',
    links: [
      {
        label: 'Paper',
        url: 'https://openreview.net/forum?id=ssjcTBZdQd',
      },
    ],
  },
  {
    title: 'Family-Aware Residual Architecture for Predicting Quantum Circuit Simulation Performance',
    authors: [
      { name: 'Honjar Xing', equalContribution: true },
      { name: 'Yehong Jiang', equalContribution: true },
      { name: 'Xianbang Wang', equalContribution: true },
      { name: 'Zehua Wang', equalContribution: true },
      { name: 'Zhicheng Jiang', equalContribution: true },
    ],
    venue: 'QC-CSAA Workshop at IEEE ISVLSI 2026',
    year: '2026',
    status: 'Full paper',
    links: [
      {
        label: 'Paper',
        url: 'https://arxiv.org/abs/2606.11620',
      },
    ],
    note: '* Equal contribution.',
  },
];

export default publications;
