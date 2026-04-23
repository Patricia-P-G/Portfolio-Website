<script setup>
import { computed, onMounted } from 'vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import SkillCard from '@/components/SkillCard.vue';
import { useSkills } from '@/components/modules/useSkills';
import { createTimeline, stagger } from 'animejs';

const { skills } = useSkills();

const groupedSkills = computed(() => ({
  frontend: skills.value.filter(skill => skill.category === 'frontend'),
  backend: skills.value.filter(skill => skill.category === 'backend'),
  database: skills.value.filter(skill => skill.category === 'database'),
  design: skills.value.filter(skill => skill.category === 'design')
}));

onMounted(() => {
  const tl = createTimeline({
    defaults: {
      duration: 900,
      ease: 'outExpo'
    }
  });

  tl
    .add('.skills-item', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1800,
      delay: stagger(100),
      ease: 'outCubic'
    })
    .add(
      '.skills-group',
      {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 1000,
        delay: stagger(140),
        ease: 'outCubic'
      },
      '-=1400'
    )
    .add(
      '.skill-card-animate',
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
</script>

<template>
  <div class="relative min-h-screen">
    <AnimatedBackground />

    <section class="relative z-10 py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mt-10 mb-12">
          <div class="title-block">
            <h2 class="skills-item text-3xl md:text-4xl font-bold text-white mb-2">
              Tech Stack & <span class="text-accent">Skills</span>
            </h2>
            <p class="skills-item text-gray-400 font-light">
              An infinite showcase of our latest digital creations.
            </p>
          </div>
        </div>

        <!-- FRONTEND -->
        <div v-if="groupedSkills.frontend.length" class="skills-group mb-10">
          <h3 class="text-2xl font-semibold text-white mb-6">Frontend</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div
              v-for="skill in groupedSkills.frontend"
              :key="skill.id"
              class="skill-card-animate"
            >
              <SkillCard :skill="skill" />
            </div>
          </div>
        </div>

        <!-- BACKEND -->
        <div v-if="groupedSkills.backend.length" class="skills-group mb-10">
          <h3 class="text-2xl font-semibold text-white mb-6">Backend</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div
              v-for="skill in groupedSkills.backend"
              :key="skill.id"
              class="skill-card-animate"
            >
              <SkillCard :skill="skill" />
            </div>
          </div>
        </div>

        <!-- DATABASE -->
        <div v-if="groupedSkills.database.length" class="skills-group mb-10">
          <h3 class="text-2xl font-semibold text-white mb-6">Database</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div
              v-for="skill in groupedSkills.database"
              :key="skill.id"
              class="skill-card-animate"
            >
              <SkillCard :skill="skill" />
            </div>
          </div>
        </div>

        <!-- DESIGN -->
        <div v-if="groupedSkills.design.length" class="skills-group mb-10">
          <h3 class="text-2xl font-semibold text-white mb-6">Design</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div
              v-for="skill in groupedSkills.design"
              :key="skill.id"
              class="skill-card-animate"
            >
              <SkillCard :skill="skill" />
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.skills-item,
.skills-group,
.skill-card-animate {
  opacity: 0;
  will-change: transform, opacity;
}
</style>