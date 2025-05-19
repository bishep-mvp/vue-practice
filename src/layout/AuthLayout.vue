<template>
  <div class="container">
    <AppMessage />
    <RouterView />
  </div>
</template>

<script setup>
import AppMessage from "@/components/UI/AppMessage.vue";
import { RouterView } from "vue-router";
</script>
