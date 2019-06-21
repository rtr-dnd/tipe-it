<template>
  <header>
    <div class="bg-white">
      <img src="../assets/logo.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'NotLoggedInHeader'
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
img{
  margin: 16px;
  height: 32px;
}
</style>
