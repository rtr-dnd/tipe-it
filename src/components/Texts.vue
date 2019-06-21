<template>
  <div>
    <LoggedInHeader></LoggedInHeader>
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
    Border,
    BorderLast,
    CustomInput
  },
  data: function() {
    return {
      sharedState: PropertyStore
    };
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
  overflow: scroll;
  padding: 60px 0 50vh 0;
}
.text {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 16px;
}
</style>
