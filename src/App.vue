<template>
  <div id="app">
    <Header></Header>
    <div id="texts">
      <div class="text" v-for="(input, index) in sharedState.state.property.content" :key="input.id">
        <Border :content-index="index" v-bind:id="index"></Border>
        <CustomInput :content-index="index" v-bind:id="index"></CustomInput>
      </div>
      <div class="text">
        <BorderLast></BorderLast>
      </div>
    </div>
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
#app{
  #texts{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 5vh;
    right: 0;
    overflow: scroll;
    padding: 60px 0 50vh 0;
  }
  .text{
    max-width: 800px;
    margin: 0 auto;
    padding-top: 16px;
  }
}
</style>
