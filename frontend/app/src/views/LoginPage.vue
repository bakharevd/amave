<template>
  <div class="container container-auth mt-5">
    <img src="@/assets/logo.svg" alt="Amave" width="462" height="160">
    <br>
    <fieldset>
      <legend>Авторизация</legend>
      <form @submit.prevent="login" class="mt-3">
        <div class="form-floating mb-3">
          <input type="text" autocomplete="off" class="form-control" id="username" v-model="credentials.username"
                 placeholder="Имя пользователя" required>
          <label for="username" class="form-label">Имя пользователя</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" autocomplete="off" class="form-control" id="password" v-model="credentials.password"
                 placeholder="Пароль" required>
          <label for="password" class="form-label">Пароль</label>
        </div>
        <div class="button-auth">
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="save-password">
            <label class="form-check-label" for="save-password">Запомнить</label>
          </div>
          <button type="submit" class="btn btn-primary">Войти</button>
        </div>
      </form>
      <a type="submit" class="btn btn-outline-secondary" href="/register">Регистрация</a>
    </fieldset>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const credentials = ref({username: '', password: ''});

    const login = async () => {
      try {
        await store.dispatch('login', credentials.value);
        router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return {credentials, login};
  },
};
</script>