
<script setup>
import BaseCard from '@/shared/components/ui/BaseCard.vue';

const testimonials = [
  {
    content: 'Fylo has improved our team productivity by an order of magnitude. Since switching our staff has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    title: 'Founder & CEO, Huddle',
    image: '/src/assets/images/profile-1.jpg'
  },
  {
    content: 'Fylo has improved our team productivity by an order of magnitude. Since switching our staff has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    title: 'Founder & CEO, Huddle',
    image: '/src/assets/images/profile-2.jpg'
  },
  {
    content: 'Fylo has improved our team productivity by an order of magnitude. Since switching our staff has become a well-oiled collaboration machine.',
    name: 'Iva Boyd',
    title: 'Founder & CEO, Huddle',
    image: '/src/assets/images/profile-3.jpg'
  }
];
</script>


<template>
  <section class="bg-white dark:bg-fylo-main py-24 px-6 relative transition-colors duration-300">
    <div class="max-w-7xl mx-auto relative">
      <img src="@/assets/images/bg-quotes.png" alt="quotes" class="absolute -top-10 left-2 w-10 md:w-14 z-0" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        <BaseCard v-for="testimonial in testimonials" :key="testimonial.name">
          <p class="text-sm md:text-base leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
            {{ testimonial.content }}
          </p>
          <div class="flex items-center">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-10 h-10 rounded-full mr-3" />
            <div>
              <h4 class="text-sm font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ testimonial.title }}</p>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
