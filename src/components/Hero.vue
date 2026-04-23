<script setup>
import { onMounted } from 'vue';
// Animations from Anime.js
import { createTimeline, stagger } from 'animejs';

// It creates a timeline for animations
onMounted(() => {
  const tl = createTimeline({
    defaults: {
      duration: 900,
      ease: 'outExpo'
    }
  });

  tl
    .add('.hero-image', {
      opacity: [0, 1],
      translateY: [40, 0],
      scale: [0.96, 1],
      duration: 1400,
      ease: 'outCubic'
    })
    .add(
      '.hero-item',
      {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1800,
        delay: stagger(100),
        ease: 'outCubic'
      },
      '<<'
    )
    .add(
      '.hero-btn',
      {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.97, 1],
        duration: 700,
        ease: 'outCubic'
      },
      '-=1400'
    )
    .add(
      '.hero-icon',
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
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-10 sm:py-12">
      <div class="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div class="flex-1 text-center md:text-left w-full">
          <p class="hero-item text-accent text-base sm:text-lg mb-3 sm:mb-4 font-medium tracking-wide">
            Hi I'm
          </p>

          <h1 class="hero-item text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Patricia <span class="text-accent">.</span>
          </h1>

          <h2
            class="hero-item text-lg sm:text-2xl md:text-3xl font-light text-gray-300 mb-4 sm:mb-6 glass-panel inline-block px-4 sm:px-6 py-2 rounded-full border-none bg-white/5">
            Frontend Developer
          </h2>

          <p class="hero-item text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-light px-2 sm:px-0">
            I craft visually stunning and high-performance web experiences. Passionate about UI/UX design,
            modern aesthetics, and bringing ideas to life through clean code.
          </p>
        </div>

        <div class="hero-image flex-1 flex justify-center items-center w-full">
          <div
            class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-100 md:h-100 rounded-2xl overflow-hidden glass-panel border floating-img border-white/20 p-2 transition-transform duration-500 shadow-2xl">
            <div class="w-full h-full rounded-xl overflow-hidden bg-gray-900 relative">
              <img
                src="../assets/hero-home/hero-photo copy.jpg"
                alt="Patricia's portrait"
                class="w-full h-full object-cover opacity-100 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start flex-wrap gap-5">
        <button
          class="hero-btn px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-accent/50 text-white rounded-full font-medium hover:bg-neon-purple hover:border-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,245,0.4)] backdrop-blur-sm group flex items-center cursor-pointer">
          <router-link to="/projects">My work</router-link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 ml-2">
            <path
              fill-rule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div class="flex gap-4 sm:gap-5 flex-wrap justify-center">
          <a
            href="https://github.com/Patricia-P-G"
            target="_blank"
            class="hero-icon w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,0,245,0.3)] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/patricia-gundelfingen/"
            target="_blank"
            class="hero-icon w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,0,245,0.3)] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </a>

          <a
            href="mailto:patpui01@easv365.com"
            class="hero-icon w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,0,245,0.3)] transition-all duration-300"
            aria-label="Send email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image,
.hero-item,
.hero-btn,
.hero-icon {
  opacity: 0;
  will-change: transform, opacity;
}

.hero-btn,
.hero-icon {
  transition: all 0.2s cubic-bezier(0.5, 1, 0.2, 0.5);
}

.floating-img {
  animation: float-main 10s ease-in-out infinite;
}

.floating-icon {
  animation: float-icon 7s ease-in-out infinite;
}

.icon-1 {
  animation-delay: 0s;
}

.icon-2 {
  animation-delay: 1.2s;
}

@keyframes float-main {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-18px);
  }
}

@keyframes float-icon {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-12px) rotate(2deg);
  }
}
</style>