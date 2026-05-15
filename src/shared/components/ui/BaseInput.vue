<template>
  <div class="flex flex-col w-full">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="px-6 py-3 rounded-full bg-white text-fylo-main focus:outline-none border-none"
      :type="type"
    />
    <span v-if="error" class="text-fylo-accent text-xs mt-1 ml-6">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  error: String
});

defineEmits(['update:modelValue']);
</script>
