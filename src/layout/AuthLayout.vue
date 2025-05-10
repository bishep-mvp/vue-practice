<template>
  <div class="container">
    <app-message />
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppMessage from "@/components/UI/AppMessage.vue";
</script>
