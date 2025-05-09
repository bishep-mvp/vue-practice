<template>
  <component :is="components[layout + '-layout']"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";

const route = useRoute();

const layout = computed(() => route.meta.layout);
const components = {
  "main-layout": MainLayout,
  "auth-layout": AuthLayout,
};
</script>
