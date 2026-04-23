<template>
  <section ref="skillsSection" class="relative py-24 bg-accent/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">
        <h2 class="skills-title text-3xl md:text-4xl font-bold text-white mb-4">
          Tech Stack & <span class="text-accent">Skills</span>
        </h2>
        <p class="skills-subtitle text-gray-400 max-w-2xl mx-auto font-light pb-10">
          The technologies and frameworks I use to bring projects to life:
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 reveal active">
        <SkillCard
          v-for="skill in baseSkills"
          :key="skill.id"
          :skill="skill"
          skill-class="base-card"
        />
      </div>

      <div class="flex justify-center mt-10 transition-all duration-500">
        <button
          @click="goToSkillsPage"
          class="skills-button px-6 py-3 rounded-full border border-accent/40 bg-accent/10 text-white hover:bg-accent/20 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          View All
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { animate, stagger } from 'animejs';
import { useRouter } from 'vue-router';
import { useSkills } from '@/components/modules/useSkills';
import SkillCard from '@/components/SkillCard.vue';

const { baseSkills } = useSkills();

const router = useRouter();
const skillsSection = ref(null);
const hasAnimated = ref(false);

let observer = null;

const goToSkillsPage = () => {
  router.push('/skills');
};

const animateSectionIntro = () => {
  animate('.skills-title', {
    opacity: [0, 1],
    y: [20, 0],
    duration: 700,
    ease: 'outQuad'
  });

  animate('.skills-subtitle', {
    opacity: [0, 1],
    y: [20, 0],
    delay: 150,
    duration: 700,
    ease: 'outQuad'
  });

  animate('.skills-button', {
    opacity: [0, 1],
    y: [20, 0],
    delay: 300,
    duration: 700,
    ease: 'outQuad'
  });
};

const animateBaseSkills = () => {
  animate('.base-card', {
    opacity: [0, 1],
    y: [30, 0],
    delay: stagger(100, { start: 450 }),
    duration: 700,
    ease: 'outQuad'
  });
};

const runSectionAnimation = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  animateSectionIntro();
  animateBaseSkills();
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        runSectionAnimation();
        observer?.disconnect();
      }
    },
    {
      threshold: 0.2
    }
  );

  if (skillsSection.value) {
    observer.observe(skillsSection.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.skills-title,
.skills-subtitle,
.skills-button,
.base-card {
  opacity: 0;
}
</style>