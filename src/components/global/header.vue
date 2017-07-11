<template>
  <div class="header">
    群聊 ({{ userNum }})
  </div>
</template>

<script>
import '../../style/header.scss';

export default {
  data() {
    return {
      userNum: '',
    };
  },

  sockets: {
    'user in': function (userNum) {
      this.userNum = userNum;
    },
  },

};
</script>
