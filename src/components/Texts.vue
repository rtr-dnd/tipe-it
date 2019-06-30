<template>
  <div>
    <LoggedInHeader v-bind:animation-state="animState"></LoggedInHeader>
    <div id="texts">
      <div class="text" v-for="(input, index) in sharedState.state.property.content" :key="input.id">
        <Border :content-index="index" v-bind:id="index"></Border>
        <CustomInput
          :content-index="index"
          v-bind:id="index"
          v-on:synced-event="onSyncedEvent"
          v-on:unsaved-event="onUnsavedEvent"
          v-on:error-event="onErrorEvent"></CustomInput>
      </div>
      <div class="text">
        <BorderLast></BorderLast>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LoggedInHeader from "./LoggedInHeader"
import CustomInput from "./CustomInput";
import Border from "./Border";
import BorderLast from "./BorderLast";
import PropertyStore from "../models/PropertyStore";
import autosize from "autosize";

Vue.component("CustomInput", CustomInput);
Vue.component("LoggedInHeader", LoggedInHeader);

export default {
  name: "Texts",
  components: {
    LoggedInHeader,
    Border,
    BorderLast,
    CustomInput
  },
  data: function() {
    return {
      sharedState: PropertyStore,
      animState: "saved"
    };
  },
  methods: {
    onSyncedEvent: function () {
      this.animState = "saved"
    },
    onUnsavedEvent: function () {
      this.animState = "unsaved" 
    },
    onErrorEvent: function() {
      this.animState = "error"
    }
  }
};
</script>

<style lang="scss" scoped>
#texts {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 5vh;
  right: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20vh 0 40vh 0;
}
.text {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 16px;
}
</style>
