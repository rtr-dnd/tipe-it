<template>
<div>
  <NotLoggedInHeader></NotLoggedInHeader>
  <div class="heading">
    <h1>気楽に書こう。なんでも書こう。</h1>
    <div class="heading-description">
      Tipeは、「タイトルをあとに書く」ノートです。
    </div>
    <div id="firebaseui-auth-container"></div>
  </div>
  <section class="intro">
    <h2>Tipeとは</h2>
    <div class="description">
      どの端末からでも、さっと気軽に書き込めて、自動的にクラウドに保存できるノートがほしい。
      そんな思いからTipeは生まれました。
    </div>
  </section>
</div>
</template>

<script>
import NotLoggedInHeader from "./NotLoggedInHeader"
export default {
    name: 'Login',
    components: {
      NotLoggedInHeader
    }
}
</script>

<style lang="scss" scoped>
.heading{
  padding: 30vh 32px;
  padding-bottom: 20vh;
}
.heading-description{
  text-align: center;
}
h1{
  font-size: 24px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;
}
#firebaseui-auth-container{
  margin-top: 32px;
}
.intro{
  background-color: rgba(0, 0, 0, 0.1);
  padding: 64px;
}
h2{
  font-weight: 300;
  text-align: center;
  margin: 32px auto;
}
.description{
  margin: 0 auto;
  max-width: 640px;
}
</style>
