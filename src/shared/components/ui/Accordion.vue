<template>
  <div class="border-b border-gray-700">
    <button
      @click="$emit('toggle')"
      class="w-full py-4 flex justify-between items-center text-left focus:outline-none"
    >
      <span class="font-bold text-lg"><slot name="title" /></span>
      <span class="transform transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </span>
    </button>
    <div
      v-show="isOpen"
      class="pb-4 text-gray-300 transition-all duration-200"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle']);
</script>
