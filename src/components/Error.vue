<template>
  <div class="lottie-wrapper">
    <lottie
      id="erroranim"
      class="status"
      :options="errorData"
      :height="28"
      :width="28"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as ErrorAnimation from "../assets/error.json";
export default {
  name: "Error",
  components: {
    lottie: Lottie
  },
  data: function() {
    return {
      errorData: {
        animationData: ErrorAnimation,
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
}
</style>


