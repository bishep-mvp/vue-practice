<template>
  <AppPage title="Список заявок">
    <template #header>
      <button class="btn primary" @click="open">Создать</button>
    </template>

    <RequestTable :requests="[]"></RequestTable>

    <teleport to="body">
      <AppModal v-if="modal" title="Создать заявку" @close="close">
        <RequestModal></RequestModal>
      </AppModal>
    </teleport>
  </AppPage>
</template>

<script setup>
import AppPage from "@/components/UI/AppPage.vue";
import AppModal from "@/components/UI/AppModal.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import { ref } from "vue";

const modal = ref(false);

const open = () => (modal.value = true);
const close = () => (modal.value = false);
</script>
