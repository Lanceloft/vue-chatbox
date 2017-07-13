<template>
  <div class="container">
    <div class="message-list" v-for="item in msgs">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
import '../../style/container.scss';

export default {
  props: {
    msgs: Array,
  },

  data() {
    return {
    };
  },

  components: {},
};
</script>
