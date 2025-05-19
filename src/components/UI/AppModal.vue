<template>
  <div class="modal-backdrop" @click="emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot />
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  title: {
    type: String,
  },
});
</script>
