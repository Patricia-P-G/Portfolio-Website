import { ref } from "vue";

export const useProjects = () => {
  const projects = ref([
    {
      id: 1,
      title: "Weather App",
      description:
        "A weather app that lets users select a city and view the current weather and a 5-day forecast.",
      longDescription: `This is my Weather App project, developed as part of my web development course at IT School.

The app allows users to:
- Search for cities
- View current weather conditions
- Check a 5-day weather forecast

It uses an external API to fetch real-time data such as temperature, humidity, and wind conditions.

The project focuses on building a clean and intuitive interface while integrating API data into a responsive layout.
`,
      image: new URL("../../assets/projects-home/weather-app/it-school-weather-hero-1.png", import.meta.url)
        .href,
      gallery: [
        new URL("../../assets/projects-home/weather-app/it-school-weather-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/weather-app/it-school-weather-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/weather-app/it-school-weather-slider-3.png", import.meta.url).href,
      ],
      tags: ["JavaScript", "API", "HTML", "CSS", "Bootstrap"],
      category: "Web Development",
      teamMembers: [],
      year: "2025",
      role: "Developer",
      liveUrl: "https://it-school-js-weather-app.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/Proiect-Final-Resort"
    },

    {
      id: 2,
      title: "Resort Booking App",
      description:
        "A resort booking app where users can browse accommodations, explore amenities and view detailed room information.",
      longDescription: `This is my React Resort Booking App project, developed as part of my web development course.

The app is a modern resort booking platform that allows users to:
- Browse available accommodations
- Explore resort amenities
- View detailed room descriptions with images

The project focuses on rebranding The Racha resort’s online experience with a clean and user-friendly interface.

It emphasizes reusable React components, structured page layout, and responsive design.

Users can easily navigate the platform and explore the resort in an intuitive and visually engaging way.
`,
      image: new URL("../../assets/projects-home/resort/resort-hero-1.png", import.meta.url).href,
      gallery: [
        new URL("../../assets/projects-home/resort/resort-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/resort/resort-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/resort/resort-slider-3.png", import.meta.url).href,
      ],
      tags: ["React", "JavaScript", "CSS", "HTML"],
      category: "Web Development",
      teamMembers: [],
      year: "2025",
      role: "Developer",
      liveUrl: "https://sunset-breeze-resort.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/Proiect-Final-Resort",
    },
    {
      id: 3,
      title: "The Brothers Lionheart App",
      description:
      "A storytelling website based on The Brothers Lionheart, combining visuals, interactivity and narrative.",
      longDescription: `This is my The Brothers Lionheart website project.

The project is a digital interpretation of The Brothers Lionheart by Astrid Lindgren, created to bring the story to life in a modern and interactive format.

The website allows users to:
- Explore the story through visual and interactive elements
- Navigate content in an engaging and immersive way
- Experience a blend of storytelling and web design

The project focuses on combining multimedia design, narrative structure, and technical implementation.

It emphasizes layout, interactivity, and visual storytelling to create a more engaging user experience.
`,
      image: new URL(
        "../../assets/projects-home/the-brothers-lionheart/the-brothers-lionheart-hero-1.png",
        import.meta.url,
      ).href,
      gallery: [
        new URL("../../assets/projects-home/the-brothers-lionheart/the-brothers-lionheart-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/the-brothers-lionheart/the-brothers-lionheart-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/the-brothers-lionheart/the-brothers-lionheart-slider-3.png", import.meta.url).href,
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      teamMembers: ["Alex", "Helena", "Lando"],
      year: "2025",
      role: "Developer",
      liveUrl: "https://andreialex232.github.io/The-Lionheart-Brothers/",
      githubUrl: "https://github.com/andreialex232/The-Lionheart-Brothers",
    },
    {
      id: 4,
      title: "Recipe Website",
      description: "A simple recipe website for exploring meals and cooking instructions.",
      longDescription: `This is my Recipe Website project, developed as part of my web development journey.

The website is a recipe platform that allows users to:
- Explore different meals
- View ingredient lists
- Follow step-by-step cooking instructions

The project focuses on presenting content in a clean, structured, and visually appealing way.

It emphasizes usability, layout design, and creating an intuitive user experience.

Users can easily browse recipes and follow instructions in a simple and engaging interface.
`,
      image: new URL("../../assets/projects-home/recipe-website/recipe-website-hero-1.png", import.meta.url).href,

      gallery: [
        new URL("../../assets/projects-home/recipe-website/recipe-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/recipe-website/recipe-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/recipe-website/recipe-slider-3.png", import.meta.url).href,
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Design / Web Development",
      teamMembers: [],
      year: "2025",
      role: "Designer / Developer",
      liveUrl: "https://patricia-p-g.github.io/Recipe-Page-Mandatory/",
      githubUrl: "https://github.com/Patricia-P-G/Recipe-Page-Mandatory",
    },

    {
      id: 5,
      title: "E-commerce App",
      description: "React E-commerce app with cart, favorites, and theme switching.",
      longDescription: `This is my React E-commerce App project, developed as part of my web development course.

The app is a simple online store that allows users to:
- Explore online games
- Add products to a shopping cart
- Save items to favorites

It uses an external API to fetch product data, including images, prices, and details.

Users can also switch between light and dark themes for a personalized experience.
`,
      image: new URL("../../assets/projects-home/e-commerce-app/it-school-products-hero-1.png", import.meta.url)
        .href,

      gallery: [
        new URL("../../assets/projects-home/e-commerce-app/it-school-products-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/e-commerce-app/it-school-products-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/e-commerce-app/it-school-products-slider-3.png", import.meta.url).href,
      ],
      tags: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
      category: "E-commerce",
      teamMembers: [],
      year: "2025",
      role: "Developer",
      liveUrl: "https://it-school-products.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/IT-School-Products",
    },
  ]);

  return {
    projects,
  };
};
