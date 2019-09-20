<template>
  <div style="background: red;">{{ msg }}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.getIndex()
  },
  methods: {
    getIndex () {
      this.axios.get("api/index").then(res => {
        console.log(res)
        this.msg = res.data.msg
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this components only -->
<style scoped>

</style>
