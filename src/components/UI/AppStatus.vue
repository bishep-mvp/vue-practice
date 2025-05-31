<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const classesMap = {
  active: "primary",
  cancelled: "danger",
  done: "primary",
  pending: "warning",
};

const textMap = {
  active: "Активен",
  cancelled: "Отменен",
  done: "Завершен",
  pending: "Выполняется",
};

const className = ref(classesMap[props.type]);
const text = ref(textMap[props.type]);
</script>
