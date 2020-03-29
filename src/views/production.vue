<template>
  <div>
    <header-bar></header-bar>
    <!-- 产品模型 -->
    <div class="box-padding">
      <div class="row box-title">
        <div class="mx-auto">产品模型</div>
      </div>
      <div class="row box-second-title">
        <div class="mx-auto">我们有四个产品类型：web端，app端，公众号，小程序</div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">web端</h5>
              <p class="card-text">web端具有最强大的功能，界面清晰美观，操作流畅。点击下方链接即可登录使用。</p>
              <a href="#" class="btn btn-danger">链接地址</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">app端</h5>
              <p class="card-text">app端操作便捷，可以到手机官方商城下载，登录个人账号即可使用。</p>
              <a href="#" class="btn btn-success">扫码下载</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">公众号端</h5>
              <p class="card-text">打开微信，搜索xxx微信公众号，关注即可获得官方最新活动消息。</p>
              <a href="#" class="btn btn-primary">扫码关注</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">小程序端</h5>
              <p class="card-text">打开微信，搜索xxx小程序，打开即可使用，小程序拥有app相同的功能。</p>
              <a href="#" class="btn btn-warning">扫码关注</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 理念 -->
    <div class="box-padding">
      <div class="row box-title">
        <div class="mx-auto">理念</div>
      </div>
      <div class="row box-second-title">
        <div class="mx-auto">mathQuestion致力为广大小学生、中学生、大学生提供一个在线刷题、在线交流、在线探讨的平台</div>
      </div>
      <div class="row box-third-title">
        <div class="mx-auto">在这样的平台下，方便我们一起探讨数学问题，探讨数学在生活中的使用，探讨科技的发展，同时为广大学生的交流提供一个纯净的平台</div>
      </div>
      <div class="row box-second-title">
        <div class="mx-auto">喜欢数学的你快快加入吧</div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from '../components/headBar'
import footerBar from '../components/footerBar'
export default {
  name: 'production',
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style scoped>

</style>
