<script setup>
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import Contact from '@/components/Contact.vue';
import { useHead } from '@unhead/vue';

// SEO
const pageTitle = 'Contact | Patricia - Frontend Developer';
const pageUrl = 'https://patricia-portfolio-website.web.app/contact';

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Patricia, a Multimedia Design student and aspiring frontend developer in Denmark. Contact me about internships, collaborations, and opportunities.'
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
      content: 'Contact Patricia to discuss frontend development internships, collaborations, and new opportunities.'
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
  <div class="relative min-h-screen">
    <section class="z-10 mt-10">
      <AnimatedBackground />
      <Contact />
    </section>
  </div>
</template>