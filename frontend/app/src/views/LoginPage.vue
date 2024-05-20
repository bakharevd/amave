<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <input v-model="credentials.username" type="text" placeholder="Username">
      <input v-model="credentials.password" type="password" placeholder="Password">
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
    const credentials = ref({ username: '', password: '' });

    const login = async () => {
      try {
        await store.dispatch('login', credentials.value);
        router.push('/');
      } catch (error) {
        alert('Login failed');
      }
    };

    return {credentials, login};
  },
};
</script>