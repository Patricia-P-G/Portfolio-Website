import { ref } from "vue";

export const useProjects = () => {
  const projects = ref([
    {
      id: 1,
      title: "Purrify Music App",
      description: "A music streaming app to discover songs, explore artists, create playlists and save favorites.",
      longDescription: `Purrify is a music streaming web application developed using Vue 3, TypeScript and Tailwind CSS as part of my 3rd semester Advanced JavaScript Apps exam project in the Multimedia Design programme.

The application focuses on creating a personalized music experience through an interactive interface, reusable components and Spotify API integration.

The application features:
- Music search for songs, artists and albums
- Personalized music recommendations
- Favorite songs and recently played tracks
- Artist and playlist browsing
- Interactive music player controls
- Responsive layouts for desktop and mobile

My technical contributions:
- Developed the frontend using Vue 3, TypeScript and Tailwind CSS
- Created reusable Vue components and composables to separate UI and application logic
- Integrated the Spotify Web API using OAuth 2.0 with PKCE authentication
- Implemented reactive music playback state using Vue's Composition API
- Developed search functionality with dynamic result previews
- Implemented favorites management and recently played functionality
- Built responsive navigation and interactive UI components
- Improved accessibility using semantic HTML, ARIA attributes and keyboard navigation.`,

      image: new URL("../../assets/projects-home/purrify-app/purrify-app-hero-1.png", import.meta.url)
        .href,
      gallery: [
        new URL("../../assets/projects-home/purrify-app/purrify-slide-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/purrify-app/purrify-slide-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/purrify-app/purrify-slide-3.png", import.meta.url).href,
        new URL("../../assets/projects-home/purrify-app/purrify-slide-4.png", import.meta.url).href,
        new URL("../../assets/projects-home/purrify-app/purrify-slide-5.png", import.meta.url).href,
      ],
      tags: ["Vue", "TypeScript", "Spotify API", "HTML", "Tailwind"],
      category: "Web Development",
      teamMembers: [],
      year: "2026",
      role: "Frontend Developer",
      liveUrl: "https://purrify-app.appwrite.network/",
      githubUrl: "https://github.com/Patricia-P-G/Purrify-App",
    },
    {
      id: 2,
      title: "Business Region Website",
      description:
        "A responsive business website connecting companies across Denmark and Germany.",
      longDescription: `Business Region DE-DK is a business networking website redesigned and developed as part of my 2nd semester Multimedia Design exam.

The website provides information about the organization, its business network, partnerships and membership opportunities.

The website features:
- Responsive layouts for desktop, tablet and mobile
- Business network search and alphabetical sorting
- Interactive navigation and reusable Vue components
- Multi-step membership form
- Newsletter subscription interface

My technical contributions:
- Developed the frontend using Vue 3, Vite and Tailwind CSS
- Created reusable Vue components with props and event handling
- Implemented reactive search, filtering and sorting functionality
- Built interactive forms and navigation components
- Added SEO metadata and Schema.org structured data
- Improved accessibility using semantic HTML, ARIA attributes and keyboard navigation
- Evaluated performance, accessibility and SEO using Lighthouse.`,

      image: new URL("../../assets/projects-home/business-region-website/business-region-hero-1.png", import.meta.url)
        .href,
      gallery: [
        new URL("../../assets/projects-home/business-region-website/business-region-slider-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/business-region-website/business-region-slider-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/business-region-website/business-region-slider-3.png", import.meta.url).href,
      ],
      tags: ["Vue", "JavaScript", "HTML", "Tailwind"],
      category: "Web Development",
      teamMembers: ["Patricia", "Tetiana", "Mihaela", "Anetta"],
      year: "2026",
      role: "Frontend Developer",
      liveUrl: "https://business-region-de-dk.web.app/",
      githubUrl: "https://github.com/Patricia-P-G/Business-Region-Website",
    },
    {
      id: 3,
      title: "Nordic Bloom E-commerce",
      description:
        "A flower webshop where visitors can explore products, browse categories and read blog articles.",
      longDescription: `Nordic Bloom is a flower webshop developed using WordPress, PHP, JavaScript, HTML and CSS as part of my 3rd semester CMS exam.

The website allows visitors to explore flower products, browse categories and find inspiration through blog articles.

The website features:
- Flower categories and individual product pages
- Blog articles with a comment section
- Responsive navigation for desktop and mobile
- Contact form with input validation
- Dynamic content managed through WordPress

My technical contributions:
- Developed custom WordPress theme templates using PHP, HTML and CSS
- Integrated Advanced Custom Fields (ACF) to retrieve and display dynamic content
- Used WordPress functions to manage template content and navigation
- Implemented client-side form validation using JavaScript and Parsley.js
- Developed server-side form handling and validation using PHP
- Improved accessibility with semantic HTML, ARIA attributes and skip links
- Debugged responsive styling and cross-page layout issues.`,

      image: new URL("../../assets/projects-home/nordic-bloom-e-commerce/nordic-bloom-hero-1.png", import.meta.url)
        .href,
      gallery: [
        new URL("../../assets/projects-home/nordic-bloom-e-commerce/nordic-bloom-slide-1.png", import.meta.url).href,
        new URL("../../assets/projects-home/nordic-bloom-e-commerce/nordic-bloom-slide-2.png", import.meta.url).href,
        new URL("../../assets/projects-home/nordic-bloom-e-commerce/nordic-bloom-slide-3.png", import.meta.url).href,
      ],
      tags: ["WordPress", "PHP", "ACF", "JavaScript"],
      category: "Web Development",
      teamMembers: ["Patricia", "Tetiana", "Iryna", "Olga"],
      year: "2026",
      role: "WordPress Developer",
      liveUrl: "https://flowerswebshop.dk/",
      githubUrl: "https://github.com/irynahutsalo/Exam3_Flower-web-shop/",
    },

    {
      id: 4,
      title: "Weather App",
      description:
        "A weather application displaying current conditions and a five-day forecast for selected cities.",
      longDescription: `A weather application developed using JavaScript, HTML, CSS and Bootstrap as part of my web development course at IT School.

The application integrates the OpenWeather API to retrieve and display weather information based on a user's city search.

The application features:
- City search for retrieving location-specific weather data
- Current temperature, humidity, wind speed and weather conditions
- Five-day weather forecasts
- Responsive interface for desktop and mobile devices

My technical contributions:
- Integrated the OpenWeather API using JavaScript to retrieve weather data
- Processed JSON responses and extracted relevant weather information
- Dynamically updated the DOM to display weather conditions and forecasts
- Implemented city-based searches to request data for different locations
- Structured the interface using HTML, CSS and Bootstrap
- Developed responsive layouts for different screen sizes.`,

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
      role: "Frontend Developer",
      liveUrl: "https://it-school-js-weather-app.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/IT-School-Weather-App",
    },

    {
      id: 5,
      title: "Resort Booking App",
      description:
        "A responsive resort website where visitors can explore accommodations, amenities and room details.",
      longDescription: `A resort website developed using React, JavaScript, HTML and CSS as part of my web development course.

The project focuses on redesigning the online experience of The Racha resort, allowing visitors to explore accommodations and resort facilities.

The website features:
- Accommodation listings with images
- Individual room details and descriptions
- Resort amenities and facilities
- Responsive navigation and page layouts

My technical contributions:
- Developed the frontend using React and JavaScript
- Created reusable React components for accommodation listings and page sections
- Used JSX to structure and render interface elements
- Organized room information and images into reusable layouts
- Implemented responsive styling using CSS
- Maintained consistent component styling and navigation across pages.`,

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
      role: "Frontend Developer",
      liveUrl: "https://sunset-breeze-resort.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/Proiect-Final-Resort",
    },

    {
      id: 6,
      title: "The Brothers Lionheart App",
      description:
        "An interactive storytelling website inspired by The Brothers Lionheart by Astrid Lindgren.",
      longDescription: `An interactive storytelling website inspired by The Brothers Lionheart by Astrid Lindgren, developed using HTML, CSS and JavaScript.

The project combines multimedia design and frontend development to present the story through an interactive digital experience.

The website features:
- Story-focused visual layouts
- Interactive storytelling elements
- Navigation between different story sections
- Responsive page layouts

My technical contributions:
- Developed website sections using semantic HTML and CSS
- Implemented interactive elements using JavaScript
- Structured content to support navigation through the story
- Applied responsive styling for different screen sizes
- Combined visual design and frontend implementation to create an engaging reading experience.`,

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
      role: "Frontend Developer",
      liveUrl: "https://andreialex232.github.io/The-Lionheart-Brothers/",
      githubUrl: "https://github.com/andreialex232/The-Lionheart-Brothers",
    },

    {
      id: 7,
      title: "Recipe Website",
      description:
        "A recipe website where visitors can explore meals, ingredients and cooking instructions.",
      longDescription: `A recipe website designed and developed using HTML, CSS and JavaScript to make browsing recipes and following cooking instructions simple and intuitive.

The website presents recipes through organized layouts with ingredients and step-by-step instructions.

The website features:
- Recipe browsing
- Ingredient lists
- Step-by-step cooking instructions
- Responsive page layouts

My technical contributions:
- Designed and implemented the website's visual layout
- Structured recipe content using semantic HTML
- Used CSS to style recipe cards, content sections and navigation
- Applied responsive styling for different screen sizes
- Used JavaScript to support interactive website elements
- Organized content to improve readability and navigation.`,

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
      id: 8,
      title: "E-commerce App",
      description:
        "A React e-commerce application featuring product browsing, a shopping cart and favorites.",
      longDescription: `An e-commerce application developed using React, JavaScript, HTML, CSS and Bootstrap as part of my web development course at IT School.

The application allows users to browse online games, manage a shopping cart and save products to their favorites.

The application features:
- Product listings with images, prices and details
- Shopping cart functionality
- Favorites management
- Light and dark theme switching
- Product data retrieved from an external API

My technical contributions:
- Developed reusable React components for the application interface
- Integrated an external API to retrieve and display product information
- Rendered product listings dynamically using React
- Implemented shopping cart and favorites functionality
- Developed light and dark theme switching
- Created responsive layouts using CSS and Bootstrap.`,

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
      role: "Frontend Developer",
      liveUrl: "https://it-school-products.netlify.app/",
      githubUrl: "https://github.com/Patricia-P-G/IT-School-Products",
    },
  ]);

  return {
    projects,
  };
};
