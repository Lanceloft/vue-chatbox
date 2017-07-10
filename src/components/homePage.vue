<template>
  <div>
    <f-header></f-header>
    <f-container :msgs="messages"></f-container>
    <f-send></f-send>
  </div>
</template>

<script>
import FHeader from './global/header';
import FContainer from './global/container';
import FSend from './global/send';

export default {
  data() {
    return {
      messages: [],
    };
  },

  sockets: {
    'chat message': function (msg) {
      console.log(msg);
      this.messages.push(msg);
    },
  },

  components: { FHeader, FContainer, FSend },
};
</script>
