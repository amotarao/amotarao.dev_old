<template>
  <div class="work" v-if="loaded">
    <work-detail v-bind="item" />
  </div>
</template>

<script>
import WorkDetail from '../components/WorkDetail';

export default {
  components: {
    WorkDetail,
  },
  computed: {
    loaded() {
      return this.$store.state.works.loaded;
    },
    item() {
      return this.$store.state.works.items.find((item) => item.id === this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch('works/getItems');
  },
};
</script>

<style lang="scss" scoped>
.work {
  height: 100%;
  width: 100%;
}
</style>
