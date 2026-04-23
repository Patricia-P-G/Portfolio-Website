<template>
    <header>
        <nav class="fixed top-0 z-50 w-full glass-panel transition-all duration-300">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                    <!-- Logo -->
                    <router-link to="/"
                        class="group tracking-widest text-white transition-colors duration-300 hover:text-accent">
                        Patricia<span class="text-accent">.</span>
                    </router-link>

                    <!-- Mobile -->
                    <div class="md:hidden">
                        <button @click.stop="toggleMobileMenu"
                            class="relative z-80 flex h-8 w-8 cursor-pointer items-center justify-center"
                            aria-label="Toggle menu" type="button">
                            <span :class="[
                                'absolute h-0.5 w-6 bg-accent transition-all duration-300 ease-in-out',
                                isOpen ? 'rotate-45' : '-translate-y-2'
                            ]"></span>

                            <span :class="[
                                'absolute h-0.5 w-6 bg-accent transition-all duration-300 ease-in-out',
                                isOpen ? 'opacity-0' : 'opacity-100'
                            ]"></span>

                            <span :class="[
                                'absolute h-0.5 w-6 bg-accent transition-all duration-300 ease-in-out',
                                isOpen ? '-rotate-45' : 'translate-y-2'
                            ]"></span>
                        </button>

                        <!-- Mobile Menu -->
                        <transition name="mobile-menu">
                            <div v-if="isOpen"
                                class="absolute left-0 top-20 w-full bg-[#171618]/95 backdrop-blur-md px-6 py-8 shadow-2xl">
                                <div class="flex flex-col items-center justify-center gap-2 text-center">
                                    <router-link v-for="(item, index) in menu" :key="item.name" :to="item.href"
                                        @click="closeMobileMenu"
                                        class="mobile-link mobile-link-item px-10 py-3 text-lg font-bold text-white"
                                        :style="{ '--i': index }">
                                        {{ item.label }}
                                    </router-link>

                                    <button @click="openResumePopup"
                                        class="mobile-link mobile-link-item px-10 py-3 text-lg font-bold text-white"
                                        :style="{ '--i': menu.length }" type="button">
                                        Resume
                                    </button>
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!-- Desktop -->
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-8">
                            <router-link to="/about"
                                class="nav-link text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                                About me
                            </router-link>
                            <router-link to="/skills"
                                class="nav-link text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                                Skills
                            </router-link>
                            <router-link to="/projects"
                                class="nav-link text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                                Projects
                            </router-link>
                            <router-link to="/contact"
                                class="nav-link text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white">
                                Contact
                            </router-link>

                            <div class="relative" ref="dropdownRef">
                                <button
                                    class="relative flex items-center gap-2 rounded-4xl border border-accent px-4 py-2 text-m text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_15px_rgba(255,0,245,0.4)] cursor-pointer"
                                    @click.stop="toggleDropdown" type="button">
                                    Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="ml-2 size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </button>

                                <transition name="dropdown">
                                    <div v-if="isDropdownOpen"
                                        class="absolute right-0 top-full mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
                                        <ul class="py-2">
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=UREXh22Sr-w" target="_blank" rel="noopener noreferrer"
                                                    class="flex items-center px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-accent hover:text-white">
                                                    Video CV
                                                </a>
                                            </li>
                                            <li><a :href="resumePdf" download="CV-Patricia-Puienaru-Gundelfingen.pdf"
                                                    class="flex items-center px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-accent hover:text-white">
                                                    CV PDF (Download)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Resume Popup -->
        <transition name="resume-popup">
            <div v-if="isResumePopupOpen" class="fixed inset-0 z-90 flex items-center justify-center bg-black/70 px-6"
                @click.self="closeResumePopup">
                <div
                    class="resume-popup-box w-full max-w-md rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 text-center shadow-2xl">
                    <h2 class="mb-4 text-2xl font-bold text-white">
                        How would you like to view the resume?
                    </h2>

                    <p class="mb-6 text-sm text-gray-300">
                        Choose one of the options below.
                    </p>

                    <div class="flex flex-row gap-3">
                        <a href="https://www.youtube.com/watch?v=UREXh22Sr-w" target="_blank" rel="noopener noreferrer"
                            class="w-full rounded-xl border border-accent px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-[0_0_15px_rgba(255,0,245,0.35)]"
                            @click="closeResumePopup">
                            Video CV
                        </a>

                        <a :href="resumePdf" download="CV-Patricia-Puienaru-Gundelfingen.pdf"
                            class="w-full rounded-xl border border-accent px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-[0_0_15px_rgba(255,0,245,0.35)]"
                            @click="closeResumePopup">
                            CV PDF
                        </a>
                    </div>

                    <button @click="closeResumePopup"
                        class="mt-7 text-sm text-gray-400 transition-colors duration-300 hover:text-white cursor-pointer"
                        type="button">
                        Cancel
                    </button>

                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isOpen = ref(false);
const isDropdownOpen = ref(false);
const isResumePopupOpen = ref(false);
const dropdownRef = ref(null);

const resumePdf = '/navbar-resume/CV Patricia Puienaru Gundelfingen.pdf';

const toggleMobileMenu = () => {
    isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
    isOpen.value = false;
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const openResumePopup = () => {
    isOpen.value = false;
    isResumePopupOpen.value = true;
};

const closeResumePopup = () => {
    isResumePopupOpen.value = false;
};

const handleClickOutside = (event) => {
    if (
        isDropdownOpen.value &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target)
    ) {
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside);
});

watch(
    () => route.path,
    () => {
        isOpen.value = false;
        isDropdownOpen.value = false;
        isResumePopupOpen.value = false;
    }
);

const menu = [
    { name: 'about', label: 'About Me', href: '/about' },
    { name: 'skills', label: 'Skills', href: '/skills' },
    { name: 'projects', label: 'Projects', href: '/projects' },
    { name: 'contact', label: 'Contact', href: '/contact' },
];
</script>



<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: opacity 0.28s ease, transform 0.28s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-14px);
}

.mobile-link-item {
    opacity: 0;
    transform: translateY(-10px);
    animation: mobileItemIn 0.35s ease forwards;
    animation-delay: calc(var(--i, 0) * 0.06s);
}

.mobile-menu-leave-active .mobile-link-item {
    animation: mobileItemOut 0.18s ease forwards;
}

@keyframes mobileItemIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes mobileItemOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-8px);
    }
}

.resume-popup-enter-active,
.resume-popup-leave-active {
    transition: opacity 0.25s ease;
}

.resume-popup-enter-from,
.resume-popup-leave-to {
    opacity: 0;
}

.resume-popup-enter-active .resume-popup-box,
.resume-popup-leave-active .resume-popup-box {
    transition: transform 0.25s ease, opacity 0.25s ease;
}

.resume-popup-enter-from .resume-popup-box,
.resume-popup-leave-to .resume-popup-box {
    opacity: 0;
    transform: translateY(10px) scale(0.96);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>