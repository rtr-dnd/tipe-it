<template>
<div>
  <NotLoggedInHeader></NotLoggedInHeader>
  <div id="firebaseui-auth-container"></div>
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
#firebaseui-auth-container{
  padding-top: 40vh;
}
</style>
