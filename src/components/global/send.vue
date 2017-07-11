<template>
  <div class="chat-input">
    <mt-field placeholder="请输入内容" v-model="message"></mt-field>
    <mt-button type="default" @click="submit">default</mt-button>
  </div>
</template>

<script>
import '../../style/send.scss';

export default {
  data() {
    return {
      message: '',
    };
  },

  methods: {
    submit() {
      this.$socket.emit('chat message', this.message);
      this.message = '';
    },
  },
};
</script>
