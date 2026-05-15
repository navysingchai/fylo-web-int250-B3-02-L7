<template>
  <nav :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 md:py-8 px-4 md:px-12 flex justify-between items-center', scrolled ? 'bg-white dark:bg-fylo-intro shadow-lg' : 'bg-transparent']">
    <div class="flex items-center">
      <img 
        :src="isDark ? '/src/assets/images/logo-dark-mode.svg' : '/src/assets/images/logo-light-mode.svg'" 
        alt="Fylo Logo" 
        class="h-5 md:h-8" 
      />
    </div>
    <div class="flex items-center space-x-3 md:space-x-10 text-sm md:text-base">
      <a href="#" class="text-gray-800 dark:text-white hover:text-fylo-cyan transition-colors">Features</a>
      <a href="#" class="text-gray-800 dark:text-white hover:text-fylo-cyan transition-colors">Team</a>
      <a href="#" class="text-gray-800 dark:text-white hover:text-fylo-cyan transition-colors">Sign In</a>
      <button @click="toggleTheme" class="p-1 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700/20 transition-colors">
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';

const scrolled = ref(false);
const isDark = inject('isDark');
const toggleTheme = inject('toggleTheme');

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
