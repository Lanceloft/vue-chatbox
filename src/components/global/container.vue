<template>
  <div class="">
    <li v-for="item in msgs">
      {{ item }}
    </li>
  </div>
</template>

<script>
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
