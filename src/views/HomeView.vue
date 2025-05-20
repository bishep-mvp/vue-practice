<template>
  <AppPage title="Список заявок">
    <template #header>
      <button class="btn primary" @click="open">Создать</button>
    </template>

    <RequestTable :requests="requests"></RequestTable>

    <teleport to="body">
      <AppModal v-if="modal" title="Создать заявку" @close="close">
        <RequestModal @created="close"></RequestModal>
      </AppModal>
    </teleport>
  </AppPage>
</template>

<script setup>
import AppPage from "@/components/UI/AppPage.vue";
import AppModal from "@/components/UI/AppModal.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const modal = ref(false);

const requests = computed(() => store.getters["request/requests"]);

const open = () => (modal.value = true);
const close = () => (modal.value = false);
</script>
