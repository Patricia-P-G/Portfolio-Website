<template>
  <AnimatedBackground />

  <section ref="sectionRef" class="py-24 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top Container -->
      <div ref="topRef" class="mb-20">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-10">
          <div
            class="order-2 md:order-1 text-center md:text-left md:items-end justify-between mt-10 mb-12"
          >
            <div class="title-block mb-12">
              <h2 class="top-item mb-2 text-3xl font-bold text-white md:text-4xl">
                Get to know <span class="text-accent">Me</span>
              </h2>
              <p class="top-item text-gray-400 font-light">
                A little more about who I am, what I do, and what inspires me.
              </p>
            </div>

            <div class="top-card glass-panel w-full rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
              <p class="top-item mb-5 text-gray-400 leading-relaxed font-light">
                I am originally from Romania, and I later moved to Denmark, where I continued my studies.
                During this time, while exploring visual design, I discovered my passion for coding and how it
                allows me to bring ideas to life in a more dynamic and interactive way.
              </p>

              <p class="top-item text-gray-400 leading-relaxed font-light">
                As I progressed, I discovered web development, where I truly found my direction.
                Since then, I have been focused on developing my skills in frontend development, combining
                creativity with technical thinking to build clean, user-friendly digital experiences.
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="hidden lg:flex order-1 md:order-2 justify-center lg:justify-end">
            <div
              class="top-image relative mt-4 md:mt-0 h-64 w-64 overflow-hidden rounded-2xl border border-white/20 glass-panel p-2 shadow-2xl transition-transform duration-500 sm:h-72 sm:w-72 md:h-80 md:w-[320px]"
            >
              <div class="h-full w-full overflow-hidden rounded-xl bg-gray-900">
                <img
                  src="../assets/hero-home/hero-photo copy.jpg"
                  alt="Portrait"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Container -->
      <div ref="bottomRef" class="grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_1fr] lg:items-start">
        <!-- Left Large Card -->
        <div class="bottom-card glass-panel rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl text-center md:text-left">
          <h3 class="bottom-item mb-4 text-2xl font-bold text-white md:text-3xl">
            What keeps me <span class="text-accent">inspired?</span>
          </h3>

          <p class="bottom-item mb-4 text-gray-400 leading-relaxed font-light">
            I am inspired by progress, seeing myself improve, learn new concepts, and turn ideas into
            something real. Every step forward motivates me to keep growing and pushing my limits.
          </p>

          <p class="bottom-item mb-4 text-gray-400 leading-relaxed font-light">
            I approach my work with discipline, consistency, and a strong sense of responsibility.
            I am reliable, meet deadlines, and enjoy challenges that help me develop both my technical
            skills and attention to detail.
          </p>

          <p class="bottom-item text-gray-400 leading-relaxed font-light">
            I am also motivated by the impact my work can have, creating experiences that feel intuitive
            and enjoyable for others. Knowing that something I build can be useful and meaningful is what
            makes the process truly rewarding.
          </p>
        </div>

        <!-- Right cards -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl">
            <h4 class="mini-item mb-3 text-xl font-semibold text-white">
              Design Mindset
            </h4>
            <p class="mini-item text-gray-400 leading-relaxed font-light">
              My background in design helps me create interfaces that are not only functional,
              but also visually balanced and engaging.
            </p>
          </div>

          <div class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl">
            <h4 class="mini-item mb-3 text-xl font-semibold text-white">
              Continuous Learning
            </h4>
            <p class="mini-item text-gray-400 leading-relaxed font-light">
              I am always learning and improving, exploring new tools and techniques
              to grow as both a developer and a creative thinker.
            </p>
          </div>

          <div class="mini-card glass-panel rounded-2xl border border-white/10 p-6 shadow-xl sm:col-span-2">
            <h4 class="mini-item mb-3 text-xl font-semibold text-white">
              Work Ethic
            </h4>
            <p class="mini-item text-gray-400 leading-relaxed font-light">
              I approach every project with structure, discipline, and attention to detail,
              focusing on delivering clean, efficient, and user-friendly solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import { createTimeline, stagger } from 'animejs';

const sectionRef = ref(null);
const topRef = ref(null);
const bottomRef = ref(null);

let observer = null;
let hasAnimated = false;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;

        const tl = createTimeline({
          defaults: {
            duration: 900,
            ease: 'outCubic'
          }
        });

        tl
          .add('.top-image', {
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.96, 1],
            duration: 1200,
            ease: 'outCubic'
          })
          .add(
            '.top-item',
            {
              opacity: [0, 1],
              translateY: [28, 0],
              delay: stagger(120),
              duration: 850,
              ease: 'outCubic'
            },
            '<<'
          )
          .add(
            '.top-card',
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
            '.bottom-card',
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
            '.bottom-item',
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
            '.mini-card',
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
            '.mini-item',
            {
              opacity: [0, 1],
              translateY: [14, 0],
              delay: stagger(70),
              duration: 500,
              ease: 'outCubic'
            },
            '-=700'
          );

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.top-image,
.top-item,
.top-card,
.bottom-card,
.bottom-item,
.mini-card,
.mini-item {
  opacity: 0;
  will-change: transform, opacity;
}
</style>