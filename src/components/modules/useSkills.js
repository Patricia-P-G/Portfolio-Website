const skills = [
  // Frontend
  {
    id: 1,
    title: 'HTML5',
    icon: new URL('../../assets/skills-home/html-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'frontend'
  },
  {
    id: 2,
    title: 'CSS',
    icon: new URL('../../assets/skills-home/css-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: new URL('../../assets/skills-home/javascript-icon.svg', import.meta.url).href,
    iconClass: 'w-12 h-12',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'TypeScript',
    icon: new URL('../../assets/skills-home/typescript-programming-language-icon.svg', import.meta.url).href,
    iconClass: 'w-12 h-12',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Vue.js',
    icon: new URL('../../assets/skills-home/vue-js-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'React',
    icon: new URL('../../assets/skills-home/react-js-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'frontend'
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    icon: new URL('../../assets/skills-home/tailwind-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'frontend'
  },
  {
    id: 8,
    title: 'Bootstrap',
    icon: new URL('../../assets/skills-home/bootstrap-icon.svg', import.meta.url).href,
    iconClass: 'w-16 h-16',
    category: 'frontend'
  },

  
  // Development Tools
  {
    id: 9,
    title: 'Git',
    icon: new URL('../../assets/skills-home/git-icon.svg', import.meta.url).href,
    iconClass: 'w-16 h-16',
    category: 'tools'
  },
  {
    id: 10,
    title: 'GitHub',
    icon: new URL('../../assets/skills-home/github-icon.svg', import.meta.url).href,
    iconClass: 'w-15 h-15',
    category: 'tools'
  },
  {
    id: 11,
    title: 'ChatGPT',
    icon: new URL('../../assets/skills-home/chatgpt-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'tools'
  },
  {
    id: 12,
    title: 'Claude',
    icon: new URL('../../assets/skills-home/claude-ai-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'tools'
  },
   {
    id: 13,
    title: 'Copilot',
    icon: new URL('../../assets/skills-home/copilot-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'tools'
  },

  // Backend & APIs
  {
    id: 14,
    title: 'API Integration',
    icon: new URL('../../assets/skills-home/api-icon.svg', import.meta.url).href,
    iconClass: 'w-17 h-17',
    category: 'backend'
  },


  // Database
  {
    id: 15,
    title: 'Firebase',
    icon: new URL('../../assets/skills-home/google-firebase-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'database'
  },
  {
    id: 16,
    title: 'Appwrite',
    icon: new URL('../../assets/skills-home/appwrite-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'database'
  },

  // Design
  {
    id: 17,
    title: 'Figma',
    icon: new URL('../../assets/skills-home/figma-icon.svg', import.meta.url).href,
    iconClass: 'w-13 h-13',
    category: 'design'
  },
   {
    id: 18,
    title: 'Canva',
    icon: new URL('../../assets/skills-home/canva-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'design'
  },
  {
    id: 19,
    title: 'Photoshop',
    icon: new URL('../../assets/skills-home/adobe-photoshop-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'design'
  },
  {
    id: 20,
    title: 'Illustrator',
    icon: new URL('../../assets/skills-home/adobe-illustrator-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'design'
  },
  {
    id: 21,
    title: 'InDesign',
    icon: new URL('../../assets/skills-home/indesign-icon.svg', import.meta.url).href,
    iconClass: 'w-14 h-14',
    category: 'design'
  }
];

const categories = [
  { id: 'frontend', title: 'Frontend' },
  { id: 'tools', title: 'Development Tools' },
  { id: 'backend', title: 'Backend & APIs' },
  { id: 'database', title: 'Database' },
  { id: 'design', title: 'Design' }
];


export const useSkills = () => {
  const groupedSkills = categories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.id)
  }));

  const baseSkills = skills.filter(skill => skill.category === 'frontend');
  const extraSkills = skills.filter(skill => skill.category !== 'frontend');

  return { skills, baseSkills, extraSkills, groupedSkills };
};
