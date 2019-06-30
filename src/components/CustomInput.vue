<template>
  <div class="flex-wrapper">
    <textarea
      v-model="sharedState.state.property.content[contentIndex].text"
      v-on:input="sync"
      v-bind:name="'textarea-'+contentIndex"
      placeholder="Jot something down..."
      v-bind:id="'textarea-'+contentIndex"
      autocomplete="nope"
    ></textarea>
    <div class="title-wrapper">
      <input
        type="text"
        v-if="sharedState.state.property.content[contentIndex].text!=''"
        v-model="sharedState.state.property.content[contentIndex].title"
        v-on:input="sync"
        placeholder="Add a title"
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
      sharedState: PropertyStore
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
      }, 500);
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
}
.title-wrapper {
  width: 35%;
  padding-left: 16px;
}
input {
  width: 100%;
  position: sticky;
  top: 70vh;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  outline: none;
  border: none;
  text-align: right;

  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
}
</style>
