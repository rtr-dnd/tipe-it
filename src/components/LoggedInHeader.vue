<template>
  <header>
    <div class="bg-white">
      <img src="../assets/logo.svg" alt="">
    </div>
    <nav>
      <li id="signout" onclick="signout()">Sign out</li>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'LoggedInHeader'
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
li{
  list-style: none;
  margin: 0px 24px;
  color: rgba(0,0,0,0.4);
  cursor: pointer;
}
.bg-white{
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
}
img{
  margin: 16px;
  height: 32px;
}
</style>
