<template>
  <div class="home">
    <work-list />
  </div>
</template>

<script>
import WorkList from '../components/WorkList';

export default {
  components: {
    WorkList,
  },
  mounted() {
    this.$store.dispatch('works/getItems');
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 16px 0;
  padding: 0 16px;
}
</style>
