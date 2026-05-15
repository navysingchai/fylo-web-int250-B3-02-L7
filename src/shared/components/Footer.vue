<template>
  <footer class="bg-slate-100 dark:bg-fylo-footer pt-64 pb-20 px-6 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      <img 
        :src="isDark ? '/src/assets/images/logo-dark-mode.svg' : '/src/assets/images/logo-light-mode.svg'" 
        alt="Fylo" 
        class="h-10 mb-12" 
      />
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        <!-- Location -->
        <div class="flex items-start md:col-span-1">
          <img src="@/assets/images/icon-location.svg" alt="location" class="w-5 mt-1 mr-6 shrink-0" />
          <p class="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <!-- Contact -->
        <div class="flex flex-col space-y-4">
          <div class="flex items-center">
            <img src="@/assets/images/icon-phone.svg" alt="phone" class="w-5 mr-6" />
            <p class="text-gray-700 dark:text-gray-300">+1-543-123-4567</p>
          </div>
          <div class="flex items-center">
            <img src="@/assets/images/icon-email.svg" alt="email" class="w-5 mr-6" />
            <p class="text-gray-700 dark:text-gray-300">example@fylo.com</p>
          </div>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">About Us</a></li>
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Jobs</a></li>
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Press</a></li>
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Blog</a></li>
          </ul>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Contact Us</a></li>
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Terms</a></li>
            <li><a href="#" class="text-gray-800 dark:text-white hover:font-bold transition-all">Privacy</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="flex justify-center md:justify-start space-x-4">
          <a href="#" class="w-10 h-10 border border-gray-800 dark:border-white rounded-full flex items-center justify-center hover:text-fylo-cyan hover:border-fylo-cyan transition-colors">
            <img src="@/assets/images/facebook.svg" alt="facebook" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 border border-gray-800 dark:border-white rounded-full flex items-center justify-center hover:text-fylo-cyan hover:border-fylo-cyan transition-colors">
            <img src="@/assets/images/twitter.svg" alt="twitter" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 border border-gray-800 dark:border-white rounded-full flex items-center justify-center hover:text-fylo-cyan hover:border-fylo-cyan transition-colors">
            <img src="@/assets/images/instagram.svg" alt="instagram" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue';
const isDark = inject('isDark');
</script>
