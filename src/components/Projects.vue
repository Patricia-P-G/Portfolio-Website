<template>
  <section ref="sectionRef" class="py-24 relative">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Container for Title and Navigation Buttons -->
      <div ref="topRef" class="flex flex-col md:flex-row md:items-end justify-between mb-12">

        <!-- Title + Description Container -->
        <div class="title-block">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
            Featured <span class="text-accent">Projects</span>
          </h2>
          <p class="text-gray-400 font-light">
            A collection of my latest digital projects.
          </p>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex gap-4 mt-6 md:mt-0 nav-buttons">

          <!-- Left Button -->
          <button @click="swiperInstance?.slidePrev()"
            class="w-12 h-12 rounded-full border border-white/10 bg-accent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Right Button -->
          <button @click="swiperInstance?.slideNext()"
            class="w-12 h-12 rounded-full border border-white/10 bg-accent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <swiper :slides-per-view="1" :space-between="30" :loop="true" :centered-slides="false" :modules="modules"
        @swiper="onSwiper" :breakpoints="{
          '640': { slidesPerView: 2 },
          '1024': { slidesPerView: 3 }
        }" class="pb-16">
        <swiper-slide v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" @view="openModal" />
        </swiper-slide>
      </swiper>
    </div>

    <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { animate, stagger } from 'animejs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { useProjects } from '@/components/modules/useProjects';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation];
const modalModules = [Navigation, Pagination];

const swiperInstance = ref(null);
const selectedProject = ref(null);

const { projects } = useProjects();

const sectionRef = ref(null);
const topRef = ref(null);

let observer = null;
let hasAnimated = false;

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const handleEscape = (e) => {
  if (e.key === 'Escape') closeModal();
};

const runAnimation = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  animate('.title-block', {
    opacity: [0, 1],
    y: [40, 0],
    duration: 900,
    ease: 'outExpo'
  });

  animate('.nav-buttons', {
    opacity: [0, 1],
    y: [40, 0],
    duration: 900,
    delay: 150,
    ease: 'outExpo'
  });

  animate('.project-card', {
    opacity: [0, 1],
    y: [60, 0],
    duration: 1000,
    delay: stagger(120, { start: 250 }),
    ease: 'outExpo'
  });
};

watch(selectedProject, (value) => {
  document.body.style.overflow = value ? 'hidden' : '';
});

onMounted(async () => {
  await nextTick();

  window.addEventListener('keydown', handleEscape);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -80px 0px'
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.title-block,
.nav-buttons,
.project-card {
  opacity: 0;
  transform: translateY(40px);
  will-change: transform, opacity;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.project-modal-slider .swiper-button-next),
:deep(.project-modal-slider .swiper-button-prev) {
  color: white;
}

:deep(.project-modal-slider .swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

:deep(.project-modal-slider .swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>