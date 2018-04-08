<template>
  <div class="sq_nav_footer" id="sq_nav_footer">
    <a href="javascript:;" v-for="(item, index) in nav" :key="index" @click="$router.push(item.path)" :class="[{'on': ($route.path === item.path)}, (item.class)]">{{item.title}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          title: '茶学堂',
          class: 'nav_index',
          path: '/'
        },
        {
          title: '加盟圈',
          class: 'nav_search',
          path: '/franchis'
        },
        {
          title: '订货',
          class: 'nav_shopcart',
          path: '/goods'
        },
        {
          title: '我的',
          class: 'nav_me',
          path: '/my'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    pageTap(e) {
      this.$router.push(e)
    }
  }
}
</script>

<style scoped>
.sq_nav_footer {
  left: 0;
  right: 0;
  max-width: 540px;
  margin: 0 auto;
  height: 49px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-shadow: 0 -2px 10px rgba(51, 51, 51, .1);
  position: fixed;
  z-index: 310;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff;
}

.sq_nav_footer>a {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #999;
  line-height: 1;
}

.sq_nav_footer>a.on {
  color: #e93b3d;
}

.sq_nav_footer>a::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin: 7px auto 5px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
}


.sq_nav_footer>a.nav_index::before {
  background-image: url(../common/images/tabbar/school_active@3x.png) !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.sq_nav_footer>a.nav_search::before {
  background-image: url(../common/images/tabbar/franchis_active@3x.png) !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.sq_nav_footer>a.nav_shopcart::before {
  background-image: url(../common/images/tabbar/goods_active@3x.png) !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.sq_nav_footer>a.nav_me::before {
  background-image: url(../common/images/tabbar/my_active@3x.png) !important;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}


.sq_nav_footer>a.nav_index.on::before {
  background-image: url(../common/images/tabbar/school_active@3x.png) !important;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.sq_nav_footer>a.nav_search.on::before {
  background-image: url(../common/images/tabbar/franchis_active@3x.png) !important;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.sq_nav_footer>a.nav_shopcart.on::before {
  background-image: url(../common/images/tabbar/goods_active@3x.png) !important;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.sq_nav_footer>a.nav_me.on::before {
  background-image: url(../common/images/tabbar/my_active@3x.png) !important;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
</style>
