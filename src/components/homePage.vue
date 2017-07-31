<template>
  <div>
    <f-header></f-header>
    <f-container :msgs="messages"></f-container>
    <f-send></f-send>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import FHeader from './global/header';
import FContainer from './global/container';
import FSend from './global/send';

export default {
  data() {
    return {
      messages: [],
    };
  },

  watch: {
    count() {
      this.messages.push(this.ownMessages);
    },
  },

  sockets: {
    'chat message': function (msg) {
      this.messages.push(msg);
    },
  },

  computed: {
    ...mapState({
      count: state => state.chat.message,
    }),

    ...mapGetters({
      ownMessages: 'getMessage',
    }),
  },

  methods: {
  },

  components: { FHeader, FContainer, FSend },
};
</script>
