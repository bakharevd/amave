<template>
  <div class="container mt-5">
    <h1>Register</h1>
    <form @submit.prevent="register" class="mt-3" autocomplete="off">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" autocomplete="off" class="form-control" id="username" v-model="user.username" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" autocomplete="off" class="form-control" id="email" v-model="user.email">
      </div>
      <div class="mb-3">
        <label for="password1" class="form-label">Password</label>
        <input type="password" autocomplete="off" class="form-control" id="password1" v-model="user.password1" required>
      </div>
      <div class="mb-3">
        <label for="password2" class="form-label">Confirm Password</label>
        <input type="password" autocomplete="off" class="form-control" id="password2" v-model="user.password2" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
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

    return { user, register };
  },
};
</script>