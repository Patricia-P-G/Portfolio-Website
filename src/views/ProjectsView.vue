<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { createTimeline, stagger } from 'animejs';
import { useHead } from '@unhead/vue';

import AnimatedBackground from '@/components/AnimatedBackground.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import { useProjects } from '@/components/modules/useProjects';

// SEO
const pageTitle = 'Projects | Patricia - Frontend Developer';
const pageUrl = 'https://patricia-portfolio-website.web.app/projects';
const pageDescription = 'Explore frontend development and UI/UX projects by Patricia, featuring Vue.js, JavaScript, TypeScript, and responsive web design.';

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

// Projects
const { projects } = useProjects();
const selectedProject = ref(null);

// Animation State
const sectionRef = ref(null);
const shouldAnimate = ref(false);
const animationFailed = ref(false);

let timeline = null;
let hasAnimated = false;
let isUnmounted = false;

// Modal State
let previousBodyOverflow = '';
let previousFocusedElement = null;

// Modal Controls
const openModal = (project) => {
  previousFocusedElement = document.activeElement;
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const handleEscape = (event) => {
  if (event.key === 'Escape' && selectedProject.value) {
    closeModal();
  }
};

// Lock Background Scroll
watch(selectedProject, (value) => {
  if (value) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = previousBodyOverflow;

    nextTick(() => {
      if (!isUnmounted && previousFocusedElement?.isConnected) {
        previousFocusedElement.focus();
      }

      previousFocusedElement = null;
    });
  }
}, { flush: 'post' });

// Animation Fallback
const handleAnimationError = (error) => {
  console.error('Projects animation failed:', error);

  animationFailed.value = true;
  timeline?.revert();
  timeline = null;
};

// Entry Animations
const runAnimation = () => {
  if (hasAnimated || isUnmounted) return;

  hasAnimated = true;

  try {
    const root = sectionRef.value;
    if (!root) return;

    const headings = root.querySelectorAll('.projects-item');
    const cards = root.querySelectorAll('.project-card-animate');

    timeline = createTimeline({
      defaults: {
        duration: 900,
        ease: 'outExpo'
      }
    });

    timeline
      .add(headings, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1800,
        delay: stagger(100),
        ease: 'outCubic'
      })
      .add(
        cards,
        {
          opacity: [0, 1],
          translateY: [16, 0],
          scale: [0.96, 1],
          delay: stagger(100),
          duration: 280,
          ease: 'outCubic'
        },
        '-=750'
      );
  } catch (error) {
    handleAnimationError(error);
  }
};

// Lifecycle
onMounted(async () => {
  await nextTick();

  if (isUnmounted || !sectionRef.value) return;

  window.addEventListener('keydown', handleEscape);

  // Respect reduced-motion preferences
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  shouldAnimate.value = true;

  await nextTick();

  if (isUnmounted) return;

  runAnimation();
});

// Cleanup
onBeforeUnmount(() => {
  isUnmounted = true;

  window.removeEventListener('keydown', handleEscape);

  timeline?.revert();
  timeline = null;

  document.body.style.overflow = previousBodyOverflow;
});
</script>

<template>
  <div class="relative min-h-screen">
    <AnimatedBackground />

    <section
      ref="sectionRef"
      class="relative z-10 py-24 overflow-hidden"
      :class="{
        'projects-ready': shouldAnimate,
        'projects-animation-failed': animationFailed
      }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mt-10 mb-12">
          <div class="title-block">
            <h1 class="projects-item text-3xl md:text-4xl font-bold text-white mb-2">
              Featured <span class="text-accent">Projects</span>
            </h1>

            <p class="projects-item text-gray-400 font-light">
              A selection of projects where I bring design and development together.
            </p>
          </div>
        </div>

        <!-- Container Projects -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-10 pb-16">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card-animate"
          >
            <ProjectCard :project="project" @view="openModal" />
          </div>
        </div>

        <!-- Project Modal -->
        <ProjectModal
          v-if="selectedProject"
          :project="selectedProject"
          @close="closeModal"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Entry Animations */
@media (prefers-reduced-motion: no-preference) {
  .projects-ready:not(.projects-animation-failed) :is(
    .projects-item,
    .project-card-animate
  ) {
    opacity: 0;
    will-change: transform, opacity;
  }
}

/* Restore Content if Animation Fails */
.projects-animation-failed :is(
  .projects-item,
  .project-card-animate
) {
  opacity: 1 !important;
  transform: none !important;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .projects-item,
  .project-card-animate {
    opacity: 1;
    transform: none;
  }
}
</style>
