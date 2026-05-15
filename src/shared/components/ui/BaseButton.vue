<template>
  <button
    :class="[
      'px-6 py-3 rounded-full font-bold transition-all duration-200 cursor-pointer',
      variant === 'primary' ? 'bg-gradient-to-r from-fylo-cyan to-fylo-blue text-white hover:opacity-80' : 'bg-white text-fylo-main hover:bg-gray-200',
      className
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['click']);
</script>
