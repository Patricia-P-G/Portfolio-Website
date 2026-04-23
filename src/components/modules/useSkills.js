import { ref, computed } from 'vue';

export const useSkills = () => {
  const skills = ref([
    {
      id: 1,
      title: 'HTML5',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/html-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'CSS',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/css-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'JavaScript',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/javascript-icon.svg', import.meta.url).href,
      iconClass: 'w-12 h-12',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Typescript',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/typescript-programming-language-icon.svg', import.meta.url).href,
      iconClass: 'w-12 h-12',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'React',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/react-js-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Vue.js',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/vue-js-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 7,
      title: 'API Integration',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/api-icon.svg', import.meta.url).href,
      iconClass: 'w-17 h-17',
      group: 'base',
      category: 'backend',
      
    },
    {
      id: 8,
      title: 'Git',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/git-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'base',
      category: 'frontend'
    },
    {
      id: 9,
      title: 'Tailwind',
      iconType: 'svg',
      group: 'base',
      category: 'frontend',
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
          <g clip-path="url(#prefix__clip0)">
            <path fill="#38bdf8" fill-rule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="prefix__clip0">
              <path fill="#fff" d="M0 0h54v32.4H0z" />
            </clipPath>
          </defs>
        </svg>
      `
    },
    {
      id: 10,
      title: 'Figma',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/figma-icon.svg', import.meta.url).href,
      iconClass: 'w-13 h-13',
      group: 'base',
      category: 'design'
    },
    {
      id: 11,
      title: 'MySQL',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/mysql-icon.svg', import.meta.url).href,
      iconClass: 'w-13 h-13',
      group: 'extra',
      category: 'database'
    },
    {
      id: 12,
      title: 'Nuxt.js',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/nuxt-js-icon.svg', import.meta.url).href,
      iconClass: 'w-13 h-13',
      group: 'extra',
      category: 'frontend'
    },
    {
      id: 13,
      title: 'Photoshop',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/adobe-photoshop-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'design'
    },

    {
      id: 14,
      title: 'Canva',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/canva-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'design'
    },
    {
      id: 15,
      title: 'Bootstrap',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/bootstrap-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'extra',
      category: 'frontend'
    },
    {
      id: 16,
      title: 'C#',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/c-sharp-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 17,
      title: '.NET',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/microsoft-dot-net-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 18,
      title: 'Django',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/django-icon.svg', import.meta.url).href,
      iconClass: 'w-13 h-13',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 19,
      title: 'Firebase',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/google-firebase-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 20,
      title: 'Docker',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/docker-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 21,
      title: 'PostgreSQL',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/postgresql-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'database'
    },
    {
      id: 22,
      title: 'Express.js',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/express-js-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 23,
      title: 'MariaDB',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/mariadb-icon.svg', import.meta.url).href,
      iconClass: 'w-16 h-16',
      group: 'extra',
      category: 'database'
    },
    {
      id: 24,
      title: 'MongoDB',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/mongodb-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'database'
    },
    {
      id: 25,
      title: 'Node.js',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/node-js-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'backend'
    },
    {
      id: 26,
      title: 'Illustrator',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/adobe-illustrator-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'design'
    },
     {
      id: 27,
      title: 'InDesign',
      iconType: 'image',
      icon: new URL('../../assets/skills-home/indesign-icon.svg', import.meta.url).href,
      iconClass: 'w-14 h-14',
      group: 'extra',
      category: 'design'
    },
    
  ]);

  const baseSkills = computed(() => skills.value.filter((skill) => skill.group === 'base'));
  const extraSkills = computed(() => skills.value.filter((skill) => skill.group === 'extra'));

  const groupedSkills = computed(() => {
    const visibleSkills = [...baseSkills.value, ...extraSkills.value];

    return {
      frontend: visibleSkills.filter((skill) => skill.category === 'frontend'),
      backend: visibleSkills.filter((skill) => skill.category === 'backend'),
      database: visibleSkills.filter((skill) => skill.category === 'database'),
      design: visibleSkills.filter((skill) => skill.category === 'design')
    };
  });

  return {
    skills,
    baseSkills,
    extraSkills,
    groupedSkills
  };
};