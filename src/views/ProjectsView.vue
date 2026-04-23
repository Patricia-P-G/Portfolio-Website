<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { createTimeline, stagger } from 'animejs';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';
import { useProjects } from '@/components/modules/useProjects';

const { projects } = useProjects();
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const handleEscape = (event) => {
  if (event.key === 'Escape') closeModal();
};

watch(selectedProject, (value) => {
  document.body.style.overflow = value ? 'hidden' : '';
});

onMounted(() => {
  window.addEventListener('keydown', handleEscape);

  const tl = createTimeline({
    defaults: {
      duration: 900,
      ease: 'outExpo'
    }
  });

  tl
    .add('.projects-item', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1800,
      delay: stagger(100),
      ease: 'outCubic'
    })
    .add(
      '.project-card-animate',
      {
        opacity: [0, 1],
        translateY: [16, 0],
        scale: [0.96, 1],
        delay: stagger(100),
        duration: 280,
        ease: 'outCubic'
      },
      '-=900'
    );
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="relative min-h-screen">
    <AnimatedBackground />

    <section class="relative z-10 py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mt-10 mb-12">
          <div class="title-block">
            <h2 class="projects-item text-3xl md:text-4xl font-bold text-white mb-2">
              Featured <span class="text-accent">Projects</span>
            </h2>
            <p class="projects-item text-gray-400 font-light">
              An infinite showcase of our latest digital creations.
            </p>
          </div>
        </div>

        <!-- Container Projects-->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-10 pb-16">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card-animate"
          >
            <ProjectCard :project="project" @view="openModal" />
          </div>
        </div>

        <ProjectModal v-if="selectedProject" :project="selectedProject" @close="closeModal" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.slider-look {
  height: 100%;
}

.projects-item,
.project-card-animate {
  opacity: 0;
  will-change: transform, opacity;
}
</style>