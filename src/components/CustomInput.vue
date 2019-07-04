<template>
  <div class="flex-wrapper">
    <textarea
      v-model="sharedState.state.property.content[contentIndex].text"
      v-on:input="sync"
      v-bind:name="'textarea-'+contentIndex"
      v-bind:placeholder="jotSomethingDown"
      v-bind:id="'textarea-'+contentIndex"
      autocomplete="nope"
    ></textarea>
    <div class="title-wrapper">
      <input
        type="text"
        v-if="sharedState.state.property.content[contentIndex].text!=''"
        v-model="sharedState.state.property.content[contentIndex].title"
        v-on:input="sync"
        v-bind:placeholder="addATitle"
        v-bind:id="'titlearea-'+contentIndex"
        autocomplete="off"
      >
    </div>
  </div>
</template>

<script>
import PropertyStore from "../models/PropertyStore";
import { setTimeout, clearTimeout } from "timers";

// eslint-disable-next-line
var timerIsSet = false;
var timerId;
var timerId2;

export default {
  name: "CustomInput",
  props: {
    contentIndex: {
      required: true
    }
  },
  data: function() {
    return {
      sharedState: PropertyStore,
      jotSomethingDown: this.$t("ci.jotsomethingdown"),
      addATitle: this.$t("ci.addatitle")
    };
  },
  methods: {
    sync: function() {
      if (timerIsSet) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        var connectedRef = firebase.database().ref(".info/connected");
        connectedRef.on("value", snap => {
          if (snap.val() === true) {
            this.$emit("synced-event");
            db.collection("users")
              .doc(firebase.auth().currentUser.uid)
              .update({ content: PropertyStore.state.property.content });
          } else {
            this.$emit("error-event");
          }
        });
      }, 1200);
      timerIsSet = true;
      this.$emit("unsaved-event");
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  margin: 32px;

  @media (max-width: 600px) {
    position: relative;
    margin: 32px 8px 16px 8px;
  }
  // align-items: flex-end;
  // position: relative;
}
textarea {
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  line-height: 1.8em;
  height: 1em;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 52px;
  }
  @supports (-webkit-overflow-scrolling: touch) {
    font-size: 16px;
  }
}
.title-wrapper {
  width: 35%;
  padding-left: 16px;
  @media (max-width: 600px) {
    width: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 0;
  }
}
input {
  position: sticky;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  outline: none;
  border: none;
  text-align: right;

  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    pointer-events: auto;
    top: calc(100vh - 128px);
    margin-left: 30%;
    width: 70%;
    padding: 16px 12px;
    background-color: rgba(255, 255, 255, 0.95);
  }

  @media (min-width: 600px) {
    width: 100%;
    top: calc(80vh - 80px);
  }
}
</style>
