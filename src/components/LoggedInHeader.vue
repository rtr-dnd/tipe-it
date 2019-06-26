<template>
  <header>
    <div class="bg-white">
      <img src="../assets/logo.svg" alt>
    </div>
    <md-menu md-size="medium" md-direction="bottom-start">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content class="md-elevation-1">
        <md-menu-item id="signout" onclick="signout()">Sign out</md-menu-item>
        <md-menu-item id="delete" onclick="deleteAccount()">Delete account</md-menu-item>
      </md-menu-content>
    </md-menu>
  </header>
</template>

<script>
import Vue from "vue";
import {MdButton, MdContent, MdMenu, MdIcon, MdList} from "vue-material/dist/components"
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdMenu)
Vue.use(MdIcon)
Vue.use(MdList)

var isMenuOpen;

export default {
  name: "LoggedInHeader",
  data: function() {
    return {
      isMenuOpen: isMenuOpen
    };
  }
};
</script>

<style lang="scss" scoped>
.md-menu-content{
  z-index: 1000;
  background-color: #fff;
  // box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.1)
}
.md-icon-button{
  color: rgba(0, 0, 0, 0.5)
}
#delete{
  color:#C62828;
}
header {
  width: 100vw;
  position: fixed;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 10;
}
li {
  list-style: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 18px;
}
.bg-white {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
}
img {
  margin: 16px;
  height: 32px;
}
</style>
