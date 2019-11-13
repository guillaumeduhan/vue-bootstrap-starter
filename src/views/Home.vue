<template lang="pug">
#Home
  header
    img(src='https://myhappyagency.com/blog/wp-content/uploads/2019/10/vue-bootstrap-vuex-eslint.png')
    h1 {{ pjson.name }}
    p {{ pjson.description }}
    a(href="https://github.com/guillaumeduhan/vue-bootstrap-boilerplate", target="_blank") Github
</template>

<script>
import pjson from '../../package.json'

export default {
  name: 'Home',
  data() {
    return {
      pjson,
    }
  },
}
</script>

<style lang="scss">
#Home {
  .avatar {
    img {
      border-radius: 75px;
      max-width: 75px;
      margin-bottom: 15px;
      background: #C32424;
    }
  }
}
</style>
