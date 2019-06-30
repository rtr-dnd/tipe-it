<template>
  <div class="lottie-wrapper">
    <lottie
      id="unhoveranim"
      class="status"
      :options="unhoverData"
      :height="28"
      :width="28"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as UnhoverAnimation from "../assets/unhover.json";
export default {
  name: "Unhover",
  components: {
    lottie: Lottie
  },
  data: function() {
    return {
      unhoverData: {
        animationData: UnhoverAnimation,
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


