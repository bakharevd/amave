<template>
  <div>
    <h1>Сообщения</h1>
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    fetch('/api/messages/')
      .then(response => response.json())
      .then(data => {
        this.messages = data;
      });
  }
};
</script>