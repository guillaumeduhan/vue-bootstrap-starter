const hello = {
  data() {
    return {
      hello: 'world',
    }
  },
  methods: {
    sayHi() {
      console.log(this.hello)
    },
  },
}

export default hello
