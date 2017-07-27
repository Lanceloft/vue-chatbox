<template>
  <div class="container">
    <ul>
      <li class="message-list me" v-for="item in msgs">
        <span class="message-item">{{ item }}</span>
      </li>
    </ul>
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
