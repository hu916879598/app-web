<template>
  <mt-header class="header" :title="title">
    <router-link to @click.native="backTap(status)" slot="left">
      <mt-button icon="back" v-if="showLeft">{{backTitle}}</mt-button>
    </router-link>
    <mt-button icon="more" slot="right" v-if="showRight"></mt-button>
  </mt-header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      show: true
    },
    backTitle: {
      type: String,
      default: ''
    },
    showLeft: {
      type: Boolean,
      default: true
    },
    showRight: {
      type: Boolean,
      default: false
    },
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    backTap(e) {
      if (!e) {
        this.$router.back(-1)
        return
      }
      this.$emit('selectTap');
    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    line-height: 1.2;
    background-color: #e93b3d;
    height: 44px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 999;

  }
  .header .mint-header-title {
    font-size: .28rem;
  }
</style>
