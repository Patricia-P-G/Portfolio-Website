<template>
  <AnimatedBackground />

  <main ref="sectionRef"
    :class="{
      'about-ready': shouldAnimate,
      'about-animation-failed': animationFailed
    }"
    class="relative overflow-hidden py-24">

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top Container -->
      <div class="mb-10">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-10">
          <div class="order-2 mt-10 mb-12 text-center md:order-1 md:text-left">
            <!-- Header -->
            <div class="title-block mb-12">
              <h1 class="top-item mb-2 text-3xl font-bold text-white md:text-4xl">
                Get to Know <span class="text-accent">Me</span>
              </h1>

              <p class="top-item font-light text-gray-400">
                A little more about who I am, what I do, and what inspires me.
              </p>
            </div>

            <div class="top-card glass-panel w-full rounded-2xl border border-white/10 p-6 shadow-xl md:p-8">
              <p class="top-item mb-5 font-light leading-relaxed text-gray-400">
                I am originally from Romania and later moved to Denmark, where I continued my studies. My interest in visual
                design gradually led me to discover coding and the creative possibilities of web development.
              </p>

              <p class="top-item font-light leading-relaxed text-gray-400">
                As I explored different areas of digital design, I realized that frontend development was where I wanted to
                focus. Today, I am studying Multimedia Design at SEA and developing my skills in Vue.js, JavaScript, and
                TypeScript through individual and collaborative projects.
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="order-1 hidden justify-center md:order-2 lg:flex lg:justify-end">
            <div class="top-image glass-panel relative mt-4 h-64 w-64 overflow-hidden rounded-2xl border border-white/20 p-2 shadow-2xl transition-transform duration-500 sm:h-72 sm:w-72 md:mt-0 md:h-80 md:w-[320px]">
              <div class="h-full w-full overflow-hidden rounded-xl bg-gray-900">
                <img src="../assets/hero-home/hero-photo copy.jpg" alt="Portrait of Patricia, frontend development student"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Container -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_1fr] lg:items-start">
        <!-- Left Large Card -->
        <section class="bottom-card glass-panel rounded-2xl border border-white/10 p-6 text-center shadow-xl md:p-8 md:text-left"
          aria-labelledby="inspiration-heading">

          <h2 id="inspiration-heading" class="bottom-item mb-4 text-2xl font-bold text-white md:text-3xl">
            What keeps me <span class="text-accent">inspired?</span>
          </h2>

          <p class="bottom-item mb-4 font-light leading-relaxed text-gray-400">
            What inspires me most is turning creative ideas into something meaningful. I love seeing how design and code come
            together to create interactive experiences that people can enjoy using.
          </p>

          <p class="bottom-item mb-4 font-light leading-relaxed text-gray-400">
            One of the most rewarding parts of development is looking back at something I once found difficult and realizing
            how much I have improved. That sense of progress motivates me to keep learning and take on new challenges.
          </p>
        </section>

        <!-- Right Cards -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <section class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl" aria-labelledby="design-mindset-heading">
            <h2 id="design-mindset-heading" class="mini-item mb-3 text-xl font-semibold text-white">
              Design Mindset
            </h2>

            <p class="mini-item font-light leading-relaxed text-gray-400">
              My design background helps me approach interfaces from the user's perspective. I pay attention to visual hierarchy,
              consistency, accessibility, and how easily people can navigate a website.
            </p>
          </section>

          <section class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl" aria-labelledby="continuous-learning-heading">
            <h2 id="continuous-learning-heading" class="mini-item mb-3 text-xl font-semibold text-white">
              Continuous Learning
            </h2>

            <p class="mini-item font-light leading-relaxed text-gray-400">
              I enjoy exploring new approaches to development and understanding how different technologies work. I'm also
              interested in using AI tools to support my workflow, from debugging code to discovering more efficient ways
              of working. 
            </p>
          </section>

          <section class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl sm:col-span-2"
           aria-labelledby="work-ethic-heading">
            <h2 id="work-ethic-heading" class="mini-item mb-3 text-xl font-semibold text-white">
              Work Ethic
            </h2>

            <p class="mini-item font-light leading-relaxed text-gray-400">
              I value clear communication, organization, and taking responsibility for my work. Through individual and group projects,
              I've gained experience collaborating with others, managing deadlines, and adapting to different challenges.
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { createTimeline, stagger } from 'animejs';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import { useHead } from '@unhead/vue';

const sectionRef = ref(null);

// Animation State
const shouldAnimate = ref(false);
const animationFailed = ref(false);

let observer = null;
let timeline = null;
let hasAnimated = false;
let isUnmounted = false;

// Animation Cleanup
const cleanupAnimations = () => {
  observer?.disconnect();
  observer = null;

  timeline?.revert();
  timeline = null;
};

// Restore Content if Animation Fails
const handleAnimationError = (error) => {
  if (isUnmounted || animationFailed.value) return;

  console.error('About animation failed:', error);
  animationFailed.value = true;
  shouldAnimate.value = false;
  cleanupAnimations();
};

// Initialize Animations
onMounted(() => {
  if (!sectionRef.value) return;

  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;

  try {
    const root = sectionRef.value;

    // Scoped Animation Elements
    const topImage = root.querySelector('.top-image');
    const topItems = root.querySelectorAll('.top-item');
    const topCard = root.querySelector('.top-card');
    const bottomCard = root.querySelector('.bottom-card');
    const bottomItems = root.querySelectorAll('.bottom-item');
    const miniCards = root.querySelectorAll('.mini-card');
    const miniItems = root.querySelectorAll('.mini-item');

    if (
      !topItems.length ||
      !topCard ||
      !bottomCard ||
      !bottomItems.length ||
      !miniCards.length ||
      !miniItems.length
    ) return;

    // Scroll-Triggered Animation
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            !entry.isIntersecting ||
            hasAnimated ||
            isUnmounted ||
            animationFailed.value
          ) return;

          hasAnimated = true;

          try {
            timeline = createTimeline({
              defaults: {
                duration: 900,
                ease: 'outCubic'
              },
              onComplete: () => {
                if (!isUnmounted) shouldAnimate.value = false;
              }
            });

            if (topImage) {
              timeline.add(topImage, {
                opacity: [0, 1],
                translateY: [40, 0],
                scale: [0.96, 1],
                duration: 1200,
                ease: 'outCubic'
              });
            }

            timeline
              .add(
                topItems,
                {
                  opacity: [0, 1],
                  translateY: [28, 0],
                  delay: stagger(120),
                  duration: 850,
                  ease: 'outCubic'
                },
                topImage ? '<<' : 0
              )
              .add(
                topCard,
                {
                  opacity: [0, 1],
                  translateY: [24, 0],
                  scale: [0.98, 1],
                  duration: 900,
                  ease: 'outCubic'
                },
                '-=800'
              )
              .add(
                bottomCard,
                {
                  opacity: [0, 1],
                  translateY: [36, 0],
                  scale: [0.98, 1],
                  duration: 900,
                  ease: 'outCubic'
                },
                '-=350'
              )
              .add(
                bottomItems,
                {
                  opacity: [0, 1],
                  translateY: [20, 0],
                  delay: stagger(90),
                  duration: 700,
                  ease: 'outCubic'
                },
                '<<'
              )
              .add(
                miniCards,
                {
                  opacity: [0, 1],
                  translateY: [24, 0],
                  scale: [0.97, 1],
                  delay: stagger(120),
                  duration: 700,
                  ease: 'outCubic'
                },
                '-=500'
              )
              .add(
                miniItems,
                {
                  opacity: [0, 1],
                  translateY: [14, 0],
                  delay: stagger(70),
                  duration: 500,
                  ease: 'outCubic'
                },
                '-=700'
              );

            observer?.unobserve(entry.target);
          } catch (error) {
            handleAnimationError(error);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    observer.observe(root);
    shouldAnimate.value = true;
  } catch (error) {
    handleAnimationError(error);
  }
});

// Cleanup
onBeforeUnmount(() => {
  isUnmounted = true;
  cleanupAnimations();
});

// SEO
const pageTitle = 'About Me | Patricia - Frontend Developer';
const pageUrl = 'https://patricia-portfolio-website.web.app/about';

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: 'Get to know Patricia, a Multimedia Design student in Denmark passionate about frontend development, UI/UX design, and creating accessible digital experiences.'
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
      content: 'Learn about my journey from visual design to frontend development, my creative mindset, technical interests, and motivation to keep learning.'
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
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .about-ready:not(.about-animation-failed) :is(
    .top-image,
    .top-item,
    .top-card,
    .bottom-card,
    .bottom-item,
    .mini-card,
    .mini-item
  ) {
    opacity: 0;
    will-change: transform, opacity;
  }
}

/* Restore Content if Animation Fails */
.about-animation-failed :is(
  .top-image,
  .top-item,
  .top-card,
  .bottom-card,
  .bottom-item,
  .mini-card,
  .mini-item
) {
  opacity: 1 !important;
  transform: none !important;
}
</style>
