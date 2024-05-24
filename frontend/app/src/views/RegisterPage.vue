<template>
  <div class="container container-auth mt-5">
    <img src="@/assets/logo.svg" alt="Amave" width="462" height="160">
    <br>
    <fieldset>
      <legend>Регистрация</legend>
      <form @submit.prevent="register" class="mt-3">
        <div class="form-floating mb-3">
          <input type="text" autocomplete="off" class="form-control" id="username" v-model="user.username" placeholder="Имя пользователя" required>
          <label for="username" class="form-label">Имя пользователя</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" autocomplete="off" class="form-control" id="email" v-model="user.email" placeholder="Почтовый адрес" >
          <label for="email" class="form-label">Почтовый адрес</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" autocomplete="off" class="form-control" id="password1" v-model="user.password1"
                 placeholder="Пароль" required>
          <label for="password1" class="form-label">Пароль</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" autocomplete="off" class="form-control" id="password2" v-model="user.password2"
                 placeholder="Повторите пароль" required>
          <label for="password2" class="form-label">Повторите пароль</label>
        </div>
        <div class="button-auth">
          <button type="submit" class="btn btn-primary">Регистрация</button>
        </div>
      </form>
      <a type="submit" class="btn btn-outline-secondary" style="border: none" href="/login">Уже есть аккаунт?</a>
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
    const user = ref({
      username: '',
      email: '',
      password1: '',
      password2: '',
    });

    const register = async () => {
      try {
        await store.dispatch('register', user.value);
        router.push('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    return {user, register};
  },
};
</script>