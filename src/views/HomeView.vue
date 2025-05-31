<template>
  <AppLoader v-if="loading" />
  <AppPage title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="open">Создать</button>
    </template>

    <RequestFilter v-model="filter" />
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
import AppLoader from "@/components/UI/AppLoader.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import RequestFilter from "@/components/request/RequestFilter.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const modal = ref(false);
const loading = ref(false);
const filter = ref({});

const requests = computed(() =>
  store.getters["request/requests"]
    .filter((request) => {
      if (filter.value.name) {
        return request.fio
          .toLowerCase()
          .includes(filter.value.name.toLowerCase());
      }
      return request;
    })
    .filter((request) => {
      if (filter.value.status) {
        return filter.value.status === request.status;
      }
      return request;
    })
);

const open = () => (modal.value = true);
const close = () => (modal.value = false);

onMounted(async () => {
  loading.value = true;
  await store.dispatch("request/load");
  loading.value = false;
});
</script>
