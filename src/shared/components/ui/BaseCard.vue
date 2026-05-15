<template>
  <div :class="['p-8 rounded-lg shadow-xl', className]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: 'bg-slate-50 dark:bg-fylo-testimonials'
  }
});
</script>
