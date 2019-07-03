<template>
  <div>
    <NotLoggedInHeader></NotLoggedInHeader>
    <div class="heading">
      <div class="flex-inner">
        <h1>{{ $t("li.h1") }}</h1>
        <div class="heading-description">{{ $t("li.description") }}</div>
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
    <!--
  <section class="intro">
    <h2>Tipeとは</h2>
    <div class="description">
      どの端末からでも、さっと気軽に書き込めて、自動的にクラウドに保存できるノートがほしい。
      そんな思いからTipeは生まれました。
    </div>
    </section>-->
  </div>
</template>

<script>
import NotLoggedInHeader from "./NotLoggedInHeader";
export default {
  name: "Login",
  components: {
    NotLoggedInHeader
  },
  methods: {
    onclick: function () {
      console.log(this.$i18n.locale)
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  line-height: 1.5em;
  padding: 0 32px;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  // padding-bottom: 20vh;
}
.flex-inner {
  margin: 0 auto;
}
.heading-description {
  text-align: center;
}
h1 {
  line-height: 1.5em;
  font-size: 28px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;
}
#firebaseui-auth-container {
  margin-top: 32px;
}
.intro {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 64px;
}
h2 {
  font-weight: 300;
  text-align: center;
  margin: 32px auto;
}
.description {
  margin: 0 auto;
  max-width: 640px;
}
</style>
