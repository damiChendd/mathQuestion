<template>
    <div>
        <header-bar></header-bar>
        <!-- 我是学生 -->
        <div class="small-box-padding">
          <div class="row box-title">
            <div class="mx-auto">我是学生</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-info">Step1: </span>
              <span>注册账号</span>
            </div>
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-warning">Step1: </span>
              <span>参加刷题</span>
            </div>
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-danger">Step1: </span>
              <span>参与活动赢得奖励</span>
            </div>
          </div>
        </div>

        <!-- 我是出题人 -->
        <div class="small-box-padding">
          <div class="row box-title">
            <div class="mx-auto">我是出题人</div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-info">Step1: </span>
              <span>登录出题后台</span>
            </div>
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-warning">Step1: </span>
              <span>加入出题行列</span>
            </div>
            <div class="col-md-3 col-lg-2" style="line-height: 50px;">
              <span class="btn-danger">Step1: </span>
              <span>获得出题报酬</span>
            </div>
          </div>
        </div>

        <!-- 我是投资人 -->
        <div class="small-box-padding">
          <div class="row box-title">
            <div class="mx-auto">我是投资人</div>
          </div>
          <div>
            <div class="row">
              <div class="mx-auto">拨打电话:18994901812</div>
            </div>
            <div class="row">
              <div class="mx-auto">联系我们:1563358306@qq.com</div>
            </div>
          </div>
        </div>

        <!-- 我是志愿者 -->
        <div class="small-box-padding">
          <div class="row box-title">
            <div class="mx-auto">我是志愿者</div>
          </div>
          <div>
            <div class="row">
              <div class="mx-auto">参与募捐</div>
            </div>
            <div class="row">
              <div class="mx-auto">你的名字将在我们的首页循环播放</div>
            </div>
            <div class="row">
              <div class="mx-auto">您捐赠的钱将会被投入到平台建设</div>
            </div>
            <div class="row justify-content-center">
              <div class="col-sm-2">
                <img src="../../static/imgs/weixin_code.png" alt="" width="160px" height="160px">
              </div>
              <div class="col-sm-2">
                <img src="../../static/imgs/zfb_code.jpg" alt="" width="160px" height="160px">
              </div>
            </div>
          </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from '../components/headBar'
import footerBar from '../components/footerBar'
export default {
  name: 'about',
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style scoped>

</style>
