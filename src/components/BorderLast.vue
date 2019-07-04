<template>
  <div class="line-wrapper">
    <div class="line" v-on:click="add()" v-bind:id="'border-last'">
      <div class="add-item">+ <span class="shortcut-text">⌘ + M / Ctrl + M</span> </div>
    </div>
  </div>
</template>

<script>
import PropertyStore from "../models/PropertyStore";
import autosize from "autosize";
import { setTimeout } from "timers";

export default {
  name: "BorderLast",
  methods: {
    add: function() {
      // eslint-disable-next-line
      PropertyStore.state.property.content.push({ text: "", title: "" });
      this.$nextTick(function() {
        var thisBorder = document.getElementById("border-last");
        thisBorder.classList.add("none");
        document.getElementById("texts").scrollTop += 60;
        setTimeout(function() {
          thisBorder.classList.remove("none");
        }, 100);
        document
          .getElementById(
            "textarea-" + (PropertyStore.state.property.content.length - 1)
          )
          .focus();
        // eslint-disable-next-line
        autosize.update(document.querySelectorAll("textarea"));
        autosize(document.querySelectorAll("textarea"));
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.none {
  display: none;
  opacity: 0;
  &:hover {
    display: none;
    opacity: 0;
  }
}
.line {
  height: 64px;
  margin-bottom: 16px;
  border-top: 1px solid;
  border-color: rgba(0, 0, 0, 0.1) transparent transparent transparent;
  display: flex;
  transition: border-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
    height 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.1s;
  align-items: center;
  .add-item {
    cursor: pointer;
    width: 100%;
    display: inline-block;
    line-height: 64px;
    font-size: 20px;
    margin: 0 32px;
    opacity: 1;
    transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-delay: 0.1s;
    transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    color: rgba(0, 0, 0, 0.2);
    vertical-align: middle;
    @media (max-width: 600px) {
      margin: 0 12px;
    }
  }
  .shortcut-text {
    margin-left: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0);
    transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    vertical-align: middle;
  }
  &:hover {
    .add-item {
      color: rgba(0, 0, 0, 0.5);
    }
    .shortcut-text {
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
.line-top {
  border-top: none !important;
  &:hover {
    border-top: none !important;
  }
}
</style>
