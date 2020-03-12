<template>
  <div class="home">
    <h2 style="color: red">{{date.title}} / 时间 {{date.date}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      date: ''
    }
  },
  created() {
    axios.get('./data.json').then(res => {
      let resData = res.data
      this.date = resData
    })
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped rel="stylesheet/less">
</style>
