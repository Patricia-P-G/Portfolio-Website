<template>
    <section ref="aboutSection" class="py-16 sm:py-20 lg:py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-card rounded-3xl pb-10 sm:pb-16 lg:pb-20">
                <div class="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-12">

                    <!-- Image -->
                    <div class="about-image w-full md:w-1/3 flex justify-center">
                        <div
                            class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-95 md:h-105 lg:w-100 lg:h-107.5 rounded-2xl overflow-hidden glass-panel border border-white/20 p-2 transition-transform duration-500 shadow-2xl">
                            <img src="../assets/about-home/about-home-pic.jpg" class="w-full h-full rounded-2xl object-cover"
                                alt="About Patricia" />
                        </div>
                    </div>

                    <!-- Text -->
                    <div class="w-full md:w-2/3 text-center md:text-left">
                        <p
                            class="about-item inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4">
                            About me
                        </p>

                        <h2 class="about-item text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Building modern interfaces
                        </h2>

                        <h2 class="about-item text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            with clean code
                        </h2>

                        <p class="about-item text-sm sm:text-base text-gray-400 leading-relaxed mb-5 sm:mb-6 font-light max-w-2xl mx-auto md:mx-0">
                            I am a frontend developer passionate about transforming ideas into engaging and intuitive
                            web experiences.
                            I focus on building responsive, high-performance interfaces with a strong attention to
                            detail and modern design principles.
                        </p>

                        <p class="about-item text-sm sm:text-base text-gray-400 leading-relaxed mb-6 font-light max-w-2xl mx-auto md:mx-0">
                            I enjoy working with clean, maintainable code and continuously exploring new technologies to
                            improve both user experience and development workflows.
                        </p>

                        <router-link to="/about"
                            class="about-btn px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-accent/50 text-white rounded-full font-medium hover:bg-neon-purple hover:border-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,245,0.4)] backdrop-blur-sm inline-flex items-center justify-center cursor-pointer">
                            Read more
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { createTimeline, stagger } from 'animejs'

const aboutSection = ref(null)
let observer = null
let hasAnimated = false

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || hasAnimated) return

                hasAnimated = true

                const tl = createTimeline({
                    defaults: {
                        duration: 900,
                        ease: 'outCubic'
                    }
                })

                tl
                    .add('.about-image', {
                        opacity: [0, 1],
                        translateY: [40, 0],
                        scale: [0.96, 1],
                        duration: 1400,
                        ease: 'outCubic'
                    })

                    .add(
                        '.about-item',
                        {
                            opacity: [0, 1],
                            translateY: [24, 0],
                            delay: stagger(110),
                            duration: 850,
                            ease: 'outCubic'
                        },
                        '<<'
                    )

                    .add(
                        '.about-btn',
                        {
                            opacity: [0, 1],
                            translateY: [18, 0],
                            scale: [0.96, 1],
                            duration: 320,
                            ease: 'outCubic'
                        },
                        '-=420'
                    )

                observer.unobserve(entry.target)
            })
        },
        {
            threshold: 0.3,
            rootMargin: '0px 0px -40px 0px'
        }
    )

    if (aboutSection.value) {
        observer.observe(aboutSection.value)
    }
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped>
.about-image,
.about-item,
.about-btn {
    opacity: 0;
    will-change: transform, opacity;
}
</style>