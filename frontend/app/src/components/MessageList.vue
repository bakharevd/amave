<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        this.messages = data.messages;
      });
  }
};
</script>