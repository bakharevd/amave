<template>
  <div id="app">
    <router-view></router-view>
    <AppNotification ref="notifications"/>
  </div>
</template>

<script>
import {EventBus} from "@/EventBus";
import AppNotification from './components/AppNotification.vue';

export default {
  name: 'App',
  components: {
    AppNotification,
  },
  mounted() {
    EventBus.on('notify', this.handleNotification);
  },
  beforeUnmount() {
    EventBus.off('notify', this.handleNotification);
  },
  methods: {
    handleNotification({message, type}) {
      !this.$refs.notifications.addNotification({message, type});
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
