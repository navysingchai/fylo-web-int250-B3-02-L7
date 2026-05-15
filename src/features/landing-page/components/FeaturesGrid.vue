
<script setup>
const features = [
  {
    icon: '/src/assets/images/icon-access-anywhere.svg',
    title: 'Access your files, anywhere',
    description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
  },
  {
    icon: '/src/assets/images/icon-security.svg',
    title: 'Security you can trust',
    description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
  },
  {
    icon: '/src/assets/images/icon-collaboration.svg',
    title: 'Real-time collaboration',
    description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
  },
  {
    icon: '/src/assets/images/icon-any-file.svg',
    title: 'Store any type of file',
    description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
  }
];
</script>


<template>
  <section class="bg-white dark:bg-fylo-main py-24 px-6 transition-colors duration-300">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
      <div v-for="feature in features" :key="feature.title" class="flex flex-col items-center text-center">
        <div class="h-20 flex items-center mb-6">
          <img :src="feature.icon" :alt="feature.title" class="h-full" />
        </div>
        <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ feature.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>