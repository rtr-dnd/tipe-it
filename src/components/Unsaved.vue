<template>
  <div class="lottie-wrapper">
    <lottie
      id="unsavedanim"
      class="status"
      :options="unsavedData"
      :height="28"
      :width="28"
      v-on:animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as UnsavedAnimation from "../assets/unsaved.json";
export default {
  name: "Unsaved",
  components: {
    lottie: Lottie
  },
  data: function() {
    return {
      unsavedData: {
        animationData: UnsavedAnimation,
        loop: false
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
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

