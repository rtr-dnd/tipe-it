<template>
  <header>
    <div class="bg-white">
      <img id="logo" src="../assets/logo.svg" alt="">
    </div>
    <div id="language" v-on:click="lang">{{ $t("nlih.language") }}</div>
  </header>
</template>

<script>
export default {
  name: 'NotLoggedInHeader',
  methods: {
    lang: function () {
      if (this.$i18n.locale === 'ja') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'ja'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  width: 100vw;
  position: fixed;
  padding: 24px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.bg-white{
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
}
#logo{
  margin: 16px;
  height: 32px;
}
#language{
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-right: 24px;
}
</style>
