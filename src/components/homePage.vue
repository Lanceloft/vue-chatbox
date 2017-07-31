<template>
  <div>
    <f-header></f-header>
    <f-container :msgs="messages"></f-container>
    <f-send></f-send>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FHeader from './global/header';
import FContainer from './global/container';
import FSend from './global/send';

export default {
  data() {
    return {
      // messages: [],
    };
  },

  computed: {
    ...mapGetters({
      messages: 'getMessage',
    }),
  },

  sockets: {
    'chat message': function (msg) {
      this.messages.push(msg);
    },
  },

  components: { FHeader, FContainer, FSend },
};
</script>
