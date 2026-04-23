<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  },
  skillClass: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div
    :class="[
      skillClass,
      'glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-white/5 cursor-default'
    ]"
  >
    <div class="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img
        v-if="skill.iconType === 'image'"
        :src="skill.icon"
        :class="skill.iconClass"
        :alt="skill.title"
      />

      <div
        v-else
        :class="skill.iconClass || 'w-14 h-14'"
        v-html="skill.svg"
      />
    </div>

    <p class="text-gray-300 font-medium group-hover:text-white">
      {{ skill.title }}
    </p>
  </div>
</template>