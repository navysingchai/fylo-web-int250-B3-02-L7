<template>
  <div :class="['min-h-screen transition-colors duration-300', isDark ? 'dark text-white' : 'bg-white text-fylo-main']">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { useTheme } from '@/shared/composables/useTheme';
import Navbar from '@/shared/components/Navbar.vue';
import Footer from '@/shared/components/Footer.vue';

const { isDark, toggleTheme } = useTheme();

provide('isDark', isDark);
provide('toggleTheme', toggleTheme);
</script>
