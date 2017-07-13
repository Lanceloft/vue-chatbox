<template>
  <div class="chat-input">
    <mt-field placeholder="请输入内容" v-model="message">
      <mt-button type="default" @click="submit">发送</mt-button>
    </mt-field>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import '../../style/send.scss';

export default {
  data() {
    return {
      message: '',
    };
  },

  methods: {
    submit() {
      if (this.message !== '') {
        this.$socket.emit('chat message', this.message);
        this.message = '';
      } else {
        MessageBox('提示', '请输入内容');
      }
    },
  },
};
</script>
