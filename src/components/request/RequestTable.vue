<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ currency(r.amount) }}</td>
        <td>
          <AppStatus :type="r.status" />
        </td>
        <td>
          <RouterLink
            v-slot="{ navigate }"
            custom
            :to="{ name: 'request', params: { id: r.id } }"
          >
            <button class="btn" @click="navigate">Открыть</button>
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { currency } from "@/utils/currency";
import { RouterLink } from "vue-router";
import AppStatus from "../UI/AppStatus.vue";

const props = defineProps({
  requests: {
    type: Array,
  },
});
</script>
