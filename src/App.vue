<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import CustomInput from './components/CustomInput'
import Border from './components/Border'
import BorderLast from './components/BorderLast'
import PropertyStore from './models/PropertyStore'
import autosize from 'autosize'

Vue.component('CustomInput', CustomInput)

export default {
  name: 'App',
  components: {
    Border,
    BorderLast,
    CustomInput
  },
  data: function () {
    return {
      sharedState: PropertyStore
    }
  }
}
</script>

<style lang="scss">
body{
    font-family: 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
    font-family: 'Roboto', sans-serif;
    margin: 0 !important;
    box-sizing: border-box;
}

.text{
    width: 85%;
    max-width: 800px;
    margin: 0 auto;
}
#app{
  width: 100%;
}
</style>
