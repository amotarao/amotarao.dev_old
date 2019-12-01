<template>
  <div class="work-detail">
    <div class="cover">
      <div class="image">
        <twitter-icon v-if="category === 'twitter'" class="icon" />
        <img v-else :src="thumbnail" :srcset="thumbnailSrcset" class="image" alt="" />
      </div>
      <h1 class="title">{{ title }}</h1>
    </div>
    <ul class="link-list">
      <li class="link-item">
        <link-button href="https://twitter.com/" type="website">サービスページ</link-button>
      </li>
      <li class="link-item">
        <link-button href="https://twitter.com/" type="github">ソースコード</link-button>
      </li>
    </ul>
    <main class="main">
      <p>ここにサービスの説明を入れますここにサービスの説明を入れますここにサービスの説明を入れます</p>
      <p>ここにサービスの説明を入れますここにサービスの説明を入れますここにサービスの説明を入れます</p>
      <div class="img-wrap">
        <img src="https://picsum.photos/600/200" />
      </div>
      <p>たまに画像もはいります</p>
      <p>ここにサービスの説明を入れますここにサービスの説明を入れますここにサービスの説明を入れます</p>
      <p>ここにサービスの説明を入れますここにサービスの説明を入れますここにサービスの説明を入れます</p>
    </main>
  </div>
</template>

<script>
import TwitterIcon from './icons/TwitterIcon';
import LinkButton from './atoms/LinkButton';

export default {
  components: {
    TwitterIcon,
    LinkButton,
  },
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
  },
  computed: {
    thumbnailSrcset() {
      const src = this.thumbnail;
      return `${src}?w=180 1x, ${src}?w=360 2x, ${src}?w=540 3x`;
    },
  },
  mounted() {
    this.$store.dispatch('works/getItems');
  },
};
</script>

<style lang="scss" scoped>
.work-detail {
  height: 100%;
  width: 100%;

  .cover {
    height: 240px;
    position: sticky;
    top: -160px;

    &::before {
      background: #999;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
    }

    .image {
      height: 100%;
      object-fit: cover;
      object-position: top center;
      opacity: 0.7;
      width: 100%;
    }

    .title {
      background: rgba(#fff, 0.7);
      display: inline-block;
      font: 700 16px/24px 'Noto Sans';
      margin-right: 32px;
      padding: 12px 24px 12px 16px;
      position: absolute;
      left: 0;
      bottom: 16px;
      text-align: left;
    }
  }

  .link-list {
    list-style: none;
    margin: 16px;
  }
  .link-item {
    & + .link-item {
      margin-top: 16px;
    }
  }

  .main {
    font: 400 16px/24px 'Noto Sans';
    padding: 16px 16px 160px;

    * + * {
      margin-top: 16px;
    }

    .img-wrap {
      margin-right: -16px;
      margin-left: -16px;
      overflow-x: scroll;
      padding: 8px 16px;
    }
  }
}
</style>
