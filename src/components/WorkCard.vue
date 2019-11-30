<template>
  <router-link :data-align="align" class="work-card" :to="`works/${id}`">
    <div class="image-wrap">
      <twitter-icon v-if="category === 'twitter'" class="icon" />
      <img v-else :src="thumbnail" :srcset="thumbnailSrcset" class="image" alt="" />
    </div>
    <p class="title">{{ title }}</p>
  </router-link>
</template>

<script>
import TwitterIcon from './icons/TwitterIcon.vue';

export default {
  components: {
    TwitterIcon,
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'webapp', 'website', 'twitter'].includes(value);
      },
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  },
  computed: {
    thumbnailSrcset() {
      const src = this.thumbnail;
      return `${src}?w=180 1x, ${src}?w=360 2x, ${src}?w=540 3x`;
    },
  },
};
</script>

<style lang="scss" scoped>
.work-card {
  background: #e3f2fd;
  border-radius: 8px;
  display: block;
  height: 180px;
  position: relative;
  width: 100%;

  .title {
    background: rgba(#2196f3, 0.9);
    color: #fff;
    display: inline-block;
    font: 700 16px/24px 'Noto Sans';
    padding: 12px 16px;
    position: absolute;
    bottom: 16px;
  }

  .image-wrap {
    align-items: center;
    display: flex;
    height: 180px;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 180px;
  }

  .image {
    max-height: 100%;
    max-width: 100%;
  }

  .icon {
    color: rgba(#2196f3, 0.9);
    height: 120px;
    width: 120px;
  }

  &[data-align='left'] {
    .title {
      padding-right: 24px;
      left: 0;
    }

    .image-wrap {
      right: 16px;
    }

    .icon {
      margin-left: auto;
    }
  }

  &[data-align='right'] {
    .title {
      padding-left: 24px;
      right: 0;
    }

    .image-wrap {
      left: 16px;
    }

    .icon {
      margin-right: auto;
    }
  }
}
</style>
