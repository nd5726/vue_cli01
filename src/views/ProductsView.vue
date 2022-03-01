<template>
    <h1>這是產品列表頁</h1>
</template>

<script>
export default {
  data () {
    return {
      products: {}
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    console.log(this.$http)
    this.getProducts()
  },
  components: {
  }
}
</script>
