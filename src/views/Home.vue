<template lang="pug">
#Home
  img(src='https://myhappyagency.com/blog/wp-content/uploads/2019/10/vue-bootstrap-vuex-eslint.png')
  h1 {{ pjson.name }}
  p {{ pjson.description }}
</template>

<script>
import pjson from '../../package.json';

export default {
  name: 'Home',
  data() {
    return {
      pjson
    }
  }
}
</script>

<style lang="scss">
  #Home {}
</style>
