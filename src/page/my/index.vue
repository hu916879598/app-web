<template>
  <div>
    <Header :title="head.title" :showLeft="false" ></Header>
    <div class="content">
      {{msg}}
    </div>
  </div>
</template>

<script>
import Header from '@view/header'
export default {
  components: {
    Header
  },
  data() {
    return {
      msg: '我的',
      head: {
        title: '我的'
      }
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
