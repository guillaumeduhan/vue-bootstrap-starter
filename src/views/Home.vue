<template lang="pug">
#Home
  header
    img(src='https://myhappyagency.com/blog/wp-content/uploads/2019/10/vue-bootstrap-vuex-eslint.png')
    h1 {{ pjson.name }}
    p {{ pjson.description }}
  .container.d-flex.flex-column.justify-content-center.align-items-center
    p Contributors:
    .avatar(v-for="contributor, index in contributors")
      a(:href="contributor.link", target="_blank")
        img(:src="contributor.img")
</template>

<script>
import pjson from '../../package.json'

export default {
  name: 'Home',
  data() {
    return {
      pjson,
      contributors: [
        {
          link: 'https://github.com/guillaumeduhan',
          img: 'https://avatars1.githubusercontent.com/u/31253241?s=460&v=4',
        },
      ],
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
    }
  }
}
</style>
