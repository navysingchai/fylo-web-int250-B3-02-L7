<script setup>
import { ref } from 'vue';
import BaseInput from '@/shared/components/ui/BaseInput.vue';
import BaseButton from '@/shared/components/ui/BaseButton.vue';

const email = ref('');
const error = ref('');

const handleSubmit = () => {
  if (!email.value) {
    error.value = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    error.value = 'Please enter a valid email address';
  } else {
    error.value = '';
    alert('Thank you for subscribing!');
    email.value = '';
  }
};
</script>


<template>
  <section class="px-6 relative z-20 -mb-40">
    <div class="max-w-4xl mx-auto bg-slate-50 dark:bg-fylo-intro p-10 md:p-16 rounded-xl shadow-2xl text-center transition-colors duration-300">
      <h2 class="text-2xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get early access today</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form @submit.prevent="handleSubmit" class="flex flex-col md:flex-row gap-6">
        <div class="grow">
          <BaseInput 
            v-model="email" 
            placeholder="email@example.com" 
            :error="error"
          />
        </div>
        <BaseButton class="whitespace-nowrap md:w-auto h-12">Get Started For Free</BaseButton>
      </form>
    </div>
  </section>
</template>