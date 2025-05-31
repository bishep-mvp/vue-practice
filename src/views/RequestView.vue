<template>
  <AppLoader v-if="loading" />
  <AppPage v-else-if="request" title="Заявка">
    {{ request }}
  </AppPage>
  <h3 v-else class="text-center"></h3>
</template>

<script setup>
import AppPage from "@/components/UI/AppPage.vue";
import AppLoader from "@/components/UI/AppLoader.vue";
import AppStatus from "@/components/UI/AppStatus.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const loading = ref(false);
const request = ref({});

onMounted(async () => {
  loading.value = true;
  request.value = await store.dispatch("request/loadOne", route.params.id);
  loading.value = false;
});
</script>
