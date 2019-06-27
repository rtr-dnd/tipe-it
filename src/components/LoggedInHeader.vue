<template>
  <header>
    <div class="logo-wrapper">
      <div class="bg-white">
        <img id="logo" src="../assets/logo.svg" alt>
      </div>
    </div>
    <div id="status-wrapper" v-on:mouseover="hover" v-on:mouseleave="unhover">
      <Saved v-if="statusInt==0"></Saved>
      <Unsaved v-if="statusInt==1"></Unsaved>
      <Hover v-if="statusInt==2"></Hover>
      <Unhover v-if="statusInt==3"></Unhover>
      <Error v-if="statusInt==4"></Error>
      <md-tooltip>Saved to cloud</md-tooltip>
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
import {
  MdButton,
  MdContent,
  MdMenu,
  MdIcon,
  MdList,
  MdTooltip
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import Saved from "./Saved";
import Unsaved from "./Unsaved";
import Hover from "./Hover";
import Unhover from "./Unhover";
import ErrorAnim from "./Error";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdMenu);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdTooltip);
Vue.component("Saved", Saved);
Vue.component("Unsaved", Unsaved);
Vue.component("Hover", Hover);
Vue.component("Unhover", Unhover);
Vue.component("Error", ErrorAnim);

var statusInt = 0; // 0:saved 1:unsaved 2:hover 3:unhover 4:error

export default {
  name: "LoggedInHeader",
  components: {
    Saved,
    Unsaved,
    Hover,
    Unhover,
    ErrorAnim
  },
  props: {
    animationState: {
      required: true
    }
  },
  data: function() {
    return {
      statusInt: 0
    };
  },
  watch: {
    animationState: function(newState, oldState) {
      if (newState == "saved") {
        this.statusInt = 0;
      } else if (newState == "unsaved") {
        this.statusInt = 1;
      }
    }
  },
  methods: {
    hover: function() {
      this.statusInt = 2;
    },
    unhover: function() {
      this.statusInt = 3;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-menu-content {
  z-index: 1000;
  background-color: #fff;
  // box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.1);
}
.md-icon-button {
  color: rgba(0, 0, 0, 0.25);
}
#delete {
  color: #c62828;
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
#logo {
  margin: 16px;
  height: 32px;
}
.logo-wrapper {
  flex-grow: 1;
}
.md-tooltip{
  font-size: 12px;
  background-color: rgba(255,255,255,0.8) !important;
  color: rgba(0,0,0,0.5);
  border: 1px solid !important;
  border-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
