<template>
  <div class="home">
    <site-header />
    <work-list />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';
import WorkList from '../components/WorkList';

export default {
  components: {
    SiteHeader,
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
