<template>
  <div class="container mt-5">
    <h1>Login</h1>
    <form @submit.prevent="login" class="mt-3" autocomplete="off">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" autocomplete="off" class="form-control" id="username" v-model="credentials.username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" autocomplete="off" class="form-control" id="password" v-model="credentials.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
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
        console.error('Login failed:', error);
      }
    };

    return { credentials, login };
  },
};
</script>