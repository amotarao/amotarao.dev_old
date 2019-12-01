<template>
  <a class="link-button" :data-type="type">
    <span class="icon" v-if="type">
      <LanguageIcon v-if="type === 'website'" />
      <GithubIcon v-if="type === 'github'" />
      <TwitterIcon v-if="type === 'twitter'" />
    </span>
    <span class="text"><slot /></span>
  </a>
</template>

<script>
import GithubIcon from '../icons/GithubIcon';
import LanguageIcon from '../icons/LanguageIcon';
import TwitterIcon from '../icons/TwitterIcon';

export default {
  components: {
    GithubIcon,
    LanguageIcon,
    TwitterIcon,
  },
  props: {
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.link-button {
  border-radius: 8px;
  color: inherit;
  display: block;
  text-align: center;
  text-decoration: none;

  @at-root %has-border {
    border: 2px solid;
    padding: 10px 14px;
  }
  @at-root %has-not-border {
    border: none;
    padding: 12px 16px;
  }

  &:not([data-type]),
  &[data-type='website'] {
    @extend %has-border;
    border-color: #333;
  }

  &[data-type='github'] {
    @extend %has-not-border;
    background: #24292e;
    color: #fff;
  }

  .icon {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
    vertical-align: middle;
    width: 24px;

    svg {
      max-height: 100%;
      max-width: 100%;
    }
  }

  .text {
    display: inline-block;
    font: 600 16px/24px 'Noto Sans';
    vertical-align: middle;
  }
}
</style>
