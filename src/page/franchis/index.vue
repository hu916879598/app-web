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
      msg: '加盟圈',
      head: {
        title: '加盟圈'
      }
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
