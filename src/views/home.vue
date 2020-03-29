<template>
  <div>
    <head-bar></head-bar>
    <!-- 轮播图 -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../static/imgs/1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../static/imgs/2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../static/imgs/3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

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

    <!-- 社区牛人 -->
    <div class="box-padding" style="background-color: #f3f4f4;">
      <div class="row box-title">
        <div class="mx-auto">社区牛人</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>陈丹</span>
          <span>解题数量：<span class="badge badge-danger badge-pill">14</span></span>
          <span>进入详情>></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>张泽涛</span>
          <span>解题数量：<span class="badge badge-warning badge-pill">14</span></span>
          <span>进入详情>></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>李四</span>
          <span>解题数量：<span class="badge badge-success badge-pill">14</span></span>
          <span>进入详情>></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>王小丫</span>
          <span>解题数量：<span class="badge badge-danger badge-pill">14</span></span>
          <span>进入详情>></span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>丽丽</span>
          <span>解题数量：<span class="badge badge-primary badge-pill">14</span></span>
          <span>进入详情>></span>
        </li>
      </ul>
    </div>

    <!-- 企业合作 -->
    <div class="box-padding">
      <div class="row box-title">
        <div class="mx-auto">合作伙伴</div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon1.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon2.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon3.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon4.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon5.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon6.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon1.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="../../static/imgs/icon2.jpg" class="icon-img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加入我们 -->
    <div>
      <div class="row box-title">
        <div class="mx-auto">加入我们</div>
      </div>
      <div class="jumbotron jumbotron-fluid join-bg">
        <div class="container">
          <h1 class="display-4">期待您的加入</h1>
          <p class="lead">这是一次机会，也是一次创新，我们期待您的加入，欢迎成为我们的伙伴。</p>
        </div>
      </div>
    </div>
    <!-- 底部链接 -->
    <div class="box-padding">
      <div class="row">
        <div class="col-md-4">
          <div>企业文化</div>
          <div>社区交流</div>
          <div>关于我们</div>
        </div>
        <div class="col-md-4">
          <div>投资我们</div>
          <div>关于我们</div>
        </div>
        <div class="col-md-4">
          <div>加入我们</div>
          <div>关于我们</div>
          <div>社区交流</div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headBar from '../components/headBar'
import footerBar from '../components/footerBar'
export default {
  name: 'home',
  components: {
    headBar,
    footerBar
  }
}
</script>

<style scoped>
</style>
