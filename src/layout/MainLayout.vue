<template>
  <TheNavbar />
  <div class="container with-nav">
    <AppMessage />
    <RouterView />
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import AppMessage from "@/components/UI/AppMessage.vue";
import { RouterView } from "vue-router";
</script>
