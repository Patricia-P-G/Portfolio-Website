<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import AnimatedBackground from '../components/AnimatedBackground.vue';
import Skills from '../components/Skills.vue';
import Journey from '../components/Journey.vue';
import Projects from '../components/Projects.vue';
import Contact from '@/components/Contact.vue';
import { useHead } from '@unhead/vue';

// SEO
const pageTitle = 'Patricia Gundelfingen | Frontend Developer';
const pageUrl = 'https://patricia-portfolio-website.web.app/';
const pageDescription = 'Portfolio of Patricia Gundelfingen, a Multimedia Design student and frontend developer building responsive, accessible web applications with Vue.js, TypeScript and React.';

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: pageDescription
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: pageTitle
    },
    {
      property: 'og:description',
      content: pageDescription
    },
    {
      property: 'og:url',
      content: pageUrl
    },
    {
      property: 'og:site_name',
      content: 'Patricia Portfolio'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: pageUrl
    }
  ]
});
</script>

<template>
  <main>
    <AnimatedBackground />
    <Hero />
    <About />
    <Skills />
    <Journey />
    <Projects />
    <Contact />
  </main>
</template>