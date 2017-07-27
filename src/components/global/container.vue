<template>
  <div class="container">
    <!-- <div class="message-list" v-for="item in msgs">
      <div>{{ item }}</div>
    </div> -->
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
