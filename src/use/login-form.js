import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();
  const PASS_MIN_LEN = 6;
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Введите почту!")
      .email("Почта должна быть валидной!")
  );

  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Введите пароль!")
      .min(
        PASS_MIN_LEN,
        `Минимальная длина пароля должна быть ${PASS_MIN_LEN} символов!`
      )
  );

  const isTooManyAttempts = computed(() => submitCount.value >= 3);

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 2000);
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    console.log("Form", values);
    await store.dispatch("auth/login", values);
    router.push("/");
  });

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  };
}
