<template>
  <section ref="journeySection" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="journey-title text-3xl md:text-4xl font-bold text-white mb-4">
          My <span class="text-[#ff00f5]">Journey</span>
        </h2>
        <p class="journey-subtitle text-gray-400 font-light">
          A journey shaped by curiosity, growth and passion.
        </p>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <div
          class="timeline-line absolute rounded-full shadow-[0_0_10px_#ff00f5] bg-[#ff00f5]/80 w-0.5 left-4 md:left-1/2 md:-translate-x-1/2 top-0 origin-top"
        ></div>

        <div class="space-y-24">
          <div class="timeline-item relative flex flex-col md:flex-row items-center justify-between w-full">
            <div class="journey-content w-full md:w-5/12 pl-12 md:pl-0 md:text-right md:pr-12">
              <h3 class="text-2xl font-bold text-white mb-1">Multimedia Design</h3>
              <p class="text-[#ff00f5] font-medium mb-3">SEA Syddansk Erhvervsakademi</p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Currently pursuing a degree in Multimedia Design, focusing on frontend development, UI/UX principles
                and digital content creation.
              </p>
            </div>

            <div
              class="timeline-dot absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#ff00f5] shadow-[0_0_15px_#ff00f5] z-10 flex items-center justify-center"
            >
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div class="journey-date w-full md:w-5/12 pl-12 md:pl-12">
              <span class="inline-block px-4 py-1 rounded-full bg-[#1a1a1a] border border-white/10 text-white text-xs font-medium">
                2025 - Present
              </span>
            </div>
          </div>

          <div class="timeline-item relative flex flex-col md:flex-row items-center justify-between w-full">
            <div class="journey-date w-full md:w-5/12 pl-12 md:pl-0 md:text-right md:pr-12 order-2 md:order-1">
              <span class="inline-block px-4 py-1 rounded-full bg-[#1a1a1a] border border-white/10 text-white text-xs font-medium">
                2024 - 2025
              </span>
            </div>

            <div
              class="timeline-dot absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#ff00f5] shadow-[0_0_15px_#ff00f5] z-10 flex items-center justify-center"
            >
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div class="journey-content w-full md:w-5/12 pl-12 md:pl-12 order-1 md:order-2">
              <h3 class="text-2xl font-bold text-white mb-1">Web Development Course</h3>
              <p class="text-[#ff00f5] font-medium mb-3">IT School</p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Completed an intensive web development course covering HTML, CSS, JavaScript, and React. Built several projects and learned modern development workflows. 
              </p>
            </div>
          </div>

          <div class="timeline-item relative flex flex-col md:flex-row items-center justify-between w-full">
            <div class="journey-content w-full md:w-5/12 pl-12 md:pl-0 md:text-right md:pr-12">
              <h3 class="text-2xl font-bold text-white mb-1">IB International Baccalaureate</h3>
              <p class="text-[#ff00f5] font-medium mb-3">Kolding Gymnasium</p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Graduated from the IB program, developing strong critical thinking, analytical, and problem-solving skills.
              </p>
            </div>

            <div
              class="timeline-dot absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#ff00f5] shadow-[0_0_15px_#ff00f5] z-10 flex items-center justify-center"
            >
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div class="journey-date w-full md:w-5/12 pl-12 md:pl-12">
              <span class="inline-block px-4 py-1 rounded-full bg-[#1a1a1a] border border-white/10 text-white text-xs font-medium">
                2020 - 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { animate, stagger } from 'animejs'

const journeySection = ref(null)
const hasAnimated = ref(false)
let observer = null

const runJourneyAnimation = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  animate('.journey-title', {
    opacity: [0, 1],
    y: [18, 0],
    duration: 900,
    ease: 'outCubic'
  })

  animate('.journey-subtitle', {
    opacity: [0, 1],
    y: [18, 0],
    delay: 180,
    duration: 900,
    ease: 'outCubic'
  })

  animate('.timeline-line', {
    opacity: [0, 1],
    scaleY: [0, 1],
    delay: 250,
    duration: 1400,
    ease: 'outCubic'
  })

  animate('.journey-content', {
    opacity: [0, 1],
    y: [24, 0],
    delay: stagger(220, { start: 350 }),
    duration: 1000,
    ease: 'outCubic'
  })

  animate('.journey-date', {
    opacity: [0, 1],
    y: [24, 0],
    delay: stagger(220, { start: 500 }),
    duration: 1000,
    ease: 'outCubic'
  })

  animate('.timeline-dot', {
    opacity: [0, 1],
    y: [35, 0],
    delay: stagger(220, { start: 600 }),
    duration: 1200,
    ease: 'outCubic'
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        runJourneyAnimation()
        observer?.disconnect()
      }
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }
  )

  if (journeySection.value) {
    observer.observe(journeySection.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.journey-title,
.journey-subtitle,
.journey-content,
.journey-date,
.timeline-dot,
.timeline-line {
  opacity: 0;
}

.timeline-line {
  transform: scaleY(0);
  height: 100%;
}
</style>