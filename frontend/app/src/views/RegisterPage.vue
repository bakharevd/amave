<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required>
      </div>
      <div>
        <label for="password1">Password:</label>
        <input id="password1" v-model="password1" type="password" required>
      </div>
      <div>
        <label for="password2">Confirm Password:</label>
        <input id="password2" v-model="password2" type="password" required>
      </div>
      <button type="submit">Register</button>
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
    const email = ref('');
    const password1 = ref('');
    const password2 = ref('');

    const register = async () => {
      try {
        await store.dispatch('register', {
          username: username.value,
          email: email.value,
          password1: password1.value,
          password2: password2.value,
        });
        router.push('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    return {
      username,
      email,
      password1,
      password2,
      register,
    };
  },
};
</script>