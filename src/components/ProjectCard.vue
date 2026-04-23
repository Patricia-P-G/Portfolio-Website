<template>
  <div class="project-card glass-panel rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col">
    <div class="relative h-64 overflow-hidden group">
      <img
        :src="project.image"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        :alt="project.title"
      />

      <div
        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
      >
        <button
          type="button"
          @click="$emit('view', project)"
          class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path
                d="M12 5c-6.307 0-9.367 5.683-9.91 6.808a.44.44 0 0 0 0 .384C2.632 13.317 5.692 19 12 19s9.367-5.683 9.91-6.808a.44.44 0 0 0 0-.384C21.368 10.683 18.308 5 12 5"
              />
              <circle cx="12" cy="12" r="3" />
            </g>
          </svg>
        </button>
      </div>
    </div>

    <div class="p-6 flex flex-col h-full">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
        {{ project.title }}
      </h3>

      <p class="text-gray-400 text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mt-auto mb-4">
        <span
          v-for="tech in project.tags"
          :key="tech"
          class="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
        >
          {{ tech }}
        </span>
      </div>

      <button
        type="button"
        @click="$emit('view', project)"
        class="w-full py-3 rounded-xl bg-accent text-white font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
      >
        View Project
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});

defineEmits(['view']);
</script>

<style scoped>
</style>