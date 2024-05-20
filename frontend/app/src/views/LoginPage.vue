<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text">
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password">
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await store.dispatch('login', { username: username.value, password: password.value });
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    };

    return { username, password, login };
  }
}
</script>