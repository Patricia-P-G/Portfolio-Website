
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { animate, stagger } from 'animejs';
import { RouterLink } from 'vue-router';
import { useSkills } from '@/components/modules/useSkills';
import SkillCard from '@/components/SkillCard.vue';

const { baseSkills } = useSkills();
const skillsSection = ref(null);

// Animation State
const shouldAnimate = ref(
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

let observer = null;
const animations = [];

// Animation Cleanup
const cleanupAnimations = () => {
  observer?.disconnect();
  observer = null;

  animations.forEach(animation => animation.revert());
  animations.length = 0;
};

// Show Content if Animation Fails
const handleAnimationError = (error) => {
  console.error('Home skills animation failed:', error);
  cleanupAnimations();
  shouldAnimate.value = false;
};

// Shared Animation
const animateElement = (element, delay = 0, y = 20) => {
  if (!element || element.length === 0) return;

  animations.push(animate(element, {
    opacity: [0, 1],
    y: [y, 0],
    delay,
    duration: 700,
    ease: 'outQuad'
  }));
};

// Animate Skills Section
const animateSection = () => {
  const section = skillsSection.value;
  if (!section) return;

  try {
    // Title, Subtitle and Button
    animateElement(section.querySelector('.skills-title'));
    animateElement(section.querySelector('.skills-subtitle'), 150);
    animateElement(section.querySelector('.skills-button'), 300);

    // Skill Cards
    animateElement(
      section.querySelectorAll('.base-card'),
      stagger(100, { start: 450 }),
      30
    );
  } catch (error) {
    handleAnimationError(error);
  }
};

// Initialize Animations
onMounted(() => {
  if (!skillsSection.value || !shouldAnimate.value) return;

  if (!('IntersectionObserver' in window)) {
    shouldAnimate.value = false;
    return;
  }

  try {
    observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;

      observer?.disconnect();
      observer = null;
      animateSection();
    }, {
      threshold: 0.2
    });

    observer.observe(skillsSection.value);
  } catch (error) {
    handleAnimationError(error);
  }
});

// Cleanup
onBeforeUnmount(() => {
  cleanupAnimations();
});
</script>

<template>
  <section ref="skillsSection" :class="{ 'skills-ready': shouldAnimate }" class="relative py-24 bg-accent/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">
        <!-- Title -->
        <h2 class="skills-title text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack & <span class="text-accent">Skills</span>
        </h2>

        <!-- Subtitle -->
        <p class="skills-subtitle text-gray-400 max-w-2xl mx-auto font-light pb-10">
          The technologies and frameworks I use to bring projects to life:
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 reveal active">
        <SkillCard v-for="skill in baseSkills" :key="skill.id" :skill="skill" skill-class="base-card"/>
      </div>

      <div class="flex justify-center mt-10 transition-all duration-500">
        <RouterLink to="/skills" class="skills-button px-6 py-3 rounded-full border border-accent/40 bg-accent/10
         text-white hover:bg-accent/20 transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-2
         focus-visible:outline-offset-4 focus-visible:outline-white">
          View All
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .skills-ready .skills-title,
  .skills-ready .skills-subtitle,
  .skills-ready .skills-button,
  .skills-ready :deep(.base-card) {
    opacity: 0;
  }
}
</style>
