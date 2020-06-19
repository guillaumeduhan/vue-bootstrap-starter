<template lang="pug">
  #app
    .container.d-flex.justify-content-center.align-items-center
      router-view
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;

  .container {
    min-height: 100vh;
  }
}
</style>
