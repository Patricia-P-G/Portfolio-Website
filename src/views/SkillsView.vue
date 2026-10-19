
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { animate, createTimeline, stagger } from 'animejs';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import SkillCard from '@/components/SkillCard.vue';
import { useSkills } from '@/components/modules/useSkills';

const { groupedSkills } = useSkills();
const skillsRef = ref(null);

// Animation State
const shouldAnimate = ref(
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
);
const animationFailed = ref(false);

let observer = null;
let isUnmounted = false;
const animations = [];

// Shared Card Animation
const cardAnimation = () => ({
  opacity: [0, 1],
  translateY: [24, 0],
  scale: [0.96, 1],
  duration: 550,
  delay: stagger(130),
  ease: 'outCubic'
});

// Animation Cleanup
const cleanupAnimations = () => {
  observer?.disconnect();
  observer = null;

  animations.forEach(animation => animation.revert());
  animations.length = 0;
};

// Show Content if Animation Fails
const handleAnimationError = (error) => {
  if (isUnmounted || animationFailed.value) return;

  console.error('Skills animation failed:', error);
  animationFailed.value = true;
  cleanupAnimations();
};

// Animate Category Title and Cards
const animateGroup = async (group) => {
  if (isUnmounted || animationFailed.value) return;

  try {
    const title = group.querySelector('.skills-title');
    const cards = group.querySelectorAll('.skill-card-animate');

    if (!title || !cards.length) return;

    const titleAnimation = animate(title, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 650,
      ease: 'outCubic'
    });

    animations.push(titleAnimation);
    await titleAnimation;

    if (isUnmounted || animationFailed.value) return;

    animations.push(animate(cards, cardAnimation()));
  } catch (error) {
    handleAnimationError(error);
  }
};

// Initialize Animations
onMounted(() => {
  if (!skillsRef.value || !shouldAnimate.value) return;

  try {
    const root = skillsRef.value;
    const headerItems = root.querySelectorAll('.skills-item');
    const groups = root.querySelectorAll('.skills-group');
    const firstGroup = groups[0];

    if (!firstGroup || !headerItems.length) return;

    // Main Title, Subtitle and Frontend
    const timeline = createTimeline({
      defaults: { duration: 900, ease: 'outCubic' }
    });

    timeline
      .add(headerItems, {
        opacity: [0, 1],
        translateY: [28, 0],
        delay: stagger(120),
        duration: 850,
        ease: 'outCubic'
      })
      .add(firstGroup.querySelector('.skills-title'), {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 650,
        ease: 'outCubic'
      }, '-=730')
      .add(firstGroup.querySelectorAll('.skill-card-animate'), cardAnimation(), '-=450');

    animations.push(timeline);

    // Scroll-Triggered Categories
    if (!('IntersectionObserver' in window)) {
      groups.forEach((group, index) => {
        if (index === 0) return;

        group.querySelectorAll('.skills-title, .skill-card-animate')
          .forEach(element => {
            element.style.opacity = '1';
          });
      });
      return;
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || isUnmounted || animationFailed.value) return;

        observer.unobserve(entry.target);
        void animateGroup(entry.target);
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -10% 0px'
    });

    groups.forEach((group, index) => {
      if (index > 0) observer.observe(group);
    });
  } catch (error) {
    handleAnimationError(error);
  }
});

// Cleanup
onBeforeUnmount(() => {
  isUnmounted = true;
  cleanupAnimations();
});
</script>

<template>
  <div class="relative min-h-screen">
    <AnimatedBackground />

    <main
      ref="skillsRef"
      :class="{
        'skills-ready': shouldAnimate,
        'skills-animation-failed': animationFailed
      }"
      class="relative z-10 overflow-hidden py-24"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <header class="mb-12 mt-10">
          <h1 class="skills-item mb-2 text-3xl font-bold text-white md:text-4xl">
            Tech Stack & <span class="text-accent">Skills</span>
          </h1>

          <p class="skills-item font-light text-gray-400">
            Technologies and tools I use to design and build engaging digital experiences.
          </p>
        </header>

        <!-- Skill Categories -->
        <section
          v-for="category in groupedSkills"
          :key="category.id"
          class="skills-group mb-10"
          :aria-labelledby="`skills-${category.id}`"
        >
          <h2
            :id="`skills-${category.id}`"
            class="skills-title mb-6 text-2xl font-semibold text-white"
          >
            {{ category.title }}
          </h2>

          <div class="skills-grid grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div
              v-for="skill in category.skills"
              :key="skill.id"
              class="skill-card-animate"
            >
              <SkillCard :skill="skill" />
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .skills-ready:not(.skills-animation-failed) .skills-item,
  .skills-ready:not(.skills-animation-failed) .skills-title,
  .skills-ready:not(.skills-animation-failed) .skill-card-animate {
    opacity: 0;
  }
}

/* Restore Content if Animation Fails */
.skills-animation-failed .skills-item,
.skills-animation-failed .skills-title,
.skills-animation-failed .skill-card-animate {
  opacity: 1 !important;
  transform: none !important;
}
</style>
