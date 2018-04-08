<template>
  <div>
    <Header :title="head.title" :showLeft="false" :status="1" @selectTap="appTap(1)"></Header>
    {{msg}}
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
      msg: '订货',
      head:{
        title:"订货"
      }
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
