<template>
  <div class="container">
    <li v-for="item in msgs">
      {{ item }}
    </li>
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
