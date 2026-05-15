<script setup>
import BaseButton from '@/shared/components/ui/BaseButton.vue';
import { inject } from 'vue';

const isDark = inject('isDark', false);
</script>


<template>
  <section class="relative bg-slate-100 dark:bg-fylo-intro pt-24 pb-48 px-6 text-center transition-colors duration-300">
    <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
      <img src="@/assets/images/illustration-intro.png" alt="Intro" class="mb-12 w-full max-w-2xl" />
      <h1 class="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        Fylo stores all your most important files in one secure location. Access them whenever you need, share and collaborate with friends family, and co-workers.
      </p>
      <BaseButton class="px-20">Get Started</BaseButton>
    </div>
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
      <img 
        :src="isDark ? '/src/assets/images/bg-curvy-dark-mode.svg' : '/src/assets/images/bg-curvy-light-mode.svg'" 
        alt="curve" 
        class="w-full h-auto"
      />
    </div>
  </section>
</template>