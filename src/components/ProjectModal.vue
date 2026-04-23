<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="project"
        class="fixed inset-0 z-9999 bg-black/75 backdrop-blur-sm flex items-center justify-center px-4 py-8"
        @click="emitClose"
      >
        <div
          class="w-full max-w-5xl h-[90vh] rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden"
          @click.stop
        >
          <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <div>
                <h3 class="text-2xl md:text-3xl font-bold text-white">{{ project.title }}</h3>
                <p class="text-gray-400 mt-1">{{ project.category }}</p>
              </div>

              <button
                @click="emitClose"
                class="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            <!-- Body -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 h-[calc(90vh-96px)]">
              <!-- Left side -->
              <div class="flex items-start">
                <swiper
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="20"
                  :loop="true"
                  :navigation="true"
                  :pagination="{ clickable: true }"
                  class="project-modal-slider rounded-2xl overflow-hidden w-full"
                >
                  <swiper-slide v-for="(image, index) in project.gallery" :key="index">
                    <img
                      :src="image"
                      :alt="`${project.title} image ${index + 1}`"
                      class="w-full h-75 md:h-100 object-cover rounded-2xl"
                    />
                  </swiper-slide>
                </swiper>
              </div>

              <!-- Right side -->
              <div class="h-full overflow-y-auto pr-2 hide-scrollbar">
                <p class="text-gray-300 leading-relaxed mb-6 project-description">
                  {{ project.longDescription }}
                </p>

                <div class="mb-6">
                  <h4 class="text-white font-semibold mb-3">Technologies</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.tags"
                      :key="tech"
                      class="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="mb-6">
                  <h4 class="text-white font-semibold mb-3">Team Members</h4>
                  <p class="text-gray-400">
                    {{
                      project.teamMembers && project.teamMembers.length
                        ? project.teamMembers.join(', ')
                        : 'Solo project'
                    }}
                  </p>
                </div>

                <div class="mb-8">
                  <h4 class="text-white font-semibold mb-3">Project Info</h4>
                  <ul class="space-y-2 text-gray-400">
                    <li><span class="text-white">Category:</span> {{ project.category }}</li>
                    <li v-if="project.year"><span class="text-white">Year:</span> {{ project.year }}</li>
                    <li v-if="project.role"><span class="text-white">Role:</span> {{ project.role }}</li>
                  </ul>
                </div>

                <div class="flex flex-wrap gap-4 pb-2">
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-5 py-3 rounded-xl bg-accent text-white font-medium hover:bg-white hover:text-black transition-all"
                  >
                    Live Demo
                  </a>

                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-5 py-3 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);
const modules = [Navigation, Pagination];

const emitClose = () => emit('close');
</script>

<style scoped>
.project-description {
  white-space: pre-line;
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

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>