<template>
  <ul class="work-list">
    <li v-for="(item, i) in items" :key="i" class="item">
      <work-card v-bind="item" :align="['left', 'right'][i % 2]" />
    </li>
  </ul>
</template>

<script>
import WorkCard from './WorkCard';

export default {
  components: {
    WorkCard,
  },
  computed: {
    items() {
      return this.$store.state.works.items;
    },
  },
};
</script>

<style lang="scss" scoped>
.work-list {
  list-style: none;
  padding: 0;

  .item + .item {
    margin-top: 16px;
  }
}
</style>
