<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="" class="navbar-brand">Math</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item cursor">
            <a href="" class="nav-link">首页</a>
          </li>
          <li class="nav-item cursor" @click="gotoPage('/practise')">
            <a class="nav-link">开始练习</a>
          </li>
          <li class="nav-item cursor" @click="gotoPage('/commit')">
            <a class="nav-link">社区交流</a>
          </li>
          <li class="nav-item cursor" @click="gotoPage('/production')">
            <a class="nav-link">产品方案</a>
          </li>
          <li class="nav-item cursor" @click="gotoPage('/about')">
            <a class="nav-link">关于我们</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headBar',
  methods: {
    // gotoPage: (e) => {
    //   // this.$router.push(e)
    //   console.log(this)
    //   console.log(e)
    //   this.$router.push('/practise')
    // }
    gotoPage (e) {
      this.$router.push(e)
    }
  }
}
</script>

<style scoped>

</style>
