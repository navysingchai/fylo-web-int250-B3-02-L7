
<script setup>
import { ref } from 'vue';
import Accordion from '@/shared/components/ui/Accordion.vue';

const activeIndex = ref(null);

const faqs = [
  {
    question: 'How secure is Fylo?',
    answer: 'Fylo uses state-of-the-art encryption and 2-factor authentication to ensure your files are safe from unauthorized access.'
  },
  {
    question: 'Can I share files with non-Fylo users?',
    answer: 'Yes! You can generate secure public links for any file or folder, allowing anyone to view or download them without needing an account.'
  },
  {
    question: 'Is there a limit on file size?',
    answer: 'Our free tier allows files up to 2GB. Premium users can upload files as large as 50GB.'
  },
  {
    question: 'How do I access my files offline?',
    answer: 'You can mark files for offline access in our mobile and desktop apps. They will be synced to your device and available even without an internet connection.'
  }
];

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="bg-white dark:bg-fylo-main py-24 px-6 pb-64 transition-colors duration-300">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <Accordion
          v-for="(item, index) in faqs"
          :key="index"
          :isOpen="activeIndex === index"
          @toggle="toggleAccordion(index)"
        >
          <template #title>{{ item.question }}</template>
          <template #content>{{ item.answer }}</template>
        </Accordion>
      </div>
    </div>
  </section>
</template>
