<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome! You are logged in.</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.dispatch('logout');
      router.push('/login');
    };

    return {logout};
  },
};
</script>