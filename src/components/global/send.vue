<template>
  <div class="">
    <mt-field label="内容" placeholder="请输入内容" type="textarea" rows="4" v-model="message"></mt-field>
    <mt-button type="default" @click="submit">default</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },

  methods: {
    submit() {
      this.$socket.emit('chat message', this.message);
      this.introduction = '';
    },
  },
};
</script>
