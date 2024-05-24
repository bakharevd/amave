<template>
  <transition-group name="list" tag="div" class="notification-container">
    <div v-for="notification in notifications" :key="notification.id" class="notification" :class="notification.type">
      {{ notification.message }}
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'AppNotification',
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    addNotification(notification) {
      notification.id = Date.now();
      this.notifications.push(notification);
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, notification.duration || 5000);
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
    },
  },
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.notification {
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  opacity: .75;
}

.notification.error {
  background-color: #f8d7da;
  color: #721c24;
  border-left: 5px solid #f5c2c7;
}

.notification.success {
  background-color: #d4edda;
  color: #155724;
  border-left: 5px solid #c3e6cb;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>