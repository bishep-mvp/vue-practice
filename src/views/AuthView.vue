<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Почта</label>
      <input type="email" id="email" v-model="email" @blur="eBlur" />
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button
      class="btn primary"
      type="submit"
      :disabled="isSubmitting || isTooManyAttempts"
    >
      Войти
    </button>
    <div class="text-danger" v-if="isTooManyAttempts">
      Вы слишком часто пытаетесь войти в систему, попробуйте позже!
    </div>
  </form>
</template>

<script setup>
import { useLoginForm } from "@/use/login-form";
import { error } from "@/utils/error";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const {
  email,
  password,
  eError,
  pError,
  eBlur,
  pBlur,
  onSubmit,
  isSubmitting,
  isTooManyAttempts,
} = useLoginForm();

if (route.query.message) {
  store.dispatch("setMessage", { value: error(route.query.message), type: "warning" });
}
</script>
