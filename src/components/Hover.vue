<template>
  <div class="lottie-wrapper">
    <lottie
      id="hoveranim"
      class="status"
      :options="hoverData"
      :height="28"
      :width="28"
      v-on:animCreated="handleAnimation"
      v-on:click="restart"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as HoverAnimation from "../assets/hover.json";
export default {
  name: "Hover",
  components: {
    lottie: Lottie
  },
  data: function() {
    return {
      hoverData: {
        animationData: HoverAnimation,
        loop: false
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    restart: function() {
      this.anim.goToAndPlay(0, true);
    }
  }
};
</script>
<style lang="scss" scoped>
.status {
  margin: 0 12px !important;
  opacity: 0.5;
}
</style>


