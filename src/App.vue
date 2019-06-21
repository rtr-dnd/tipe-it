<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/Header'
import CustomInput from './components/CustomInput'
import Border from './components/Border'
import BorderLast from './components/BorderLast'
import PropertyStore from './models/PropertyStore'
import autosize from 'autosize'

Vue.component('Header', Header)
Vue.component('CustomInput', CustomInput)

export default {
  name: 'App',
  components: {
    Header,
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

<style lang="scss" scoped>
</style>
