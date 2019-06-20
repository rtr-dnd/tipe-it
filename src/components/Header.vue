<template>
  <header>
    <div class="bg-white">
      <img src="../assets/logo.svg" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  font-size: 24px;
  padding: 24px;
  z-index: 10;
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
