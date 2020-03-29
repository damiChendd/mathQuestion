<template>
  <div>
    <header-bar></header-bar>
    <div class="big-box">
      <div class="content-box" ref="sideBox" @mousedown="slide($event)">
        <div class="card border-primary" style="width: 18rem;display: inline-block;">
          <div class="card-header">一月上新</div>
          <div class="card-body text-primary">
            <h5 class="card-title">制定计划月</h5>
            <p class="card-text">一月之间小伙伴可以制定自己的一年计划，在一年之内完成，我们会有奖励</p>
          </div>
        </div>
        <div class="card border-success" style="width: 18rem;display: inline-block;">
          <div class="card-header">二月奋斗</div>
          <div class="card-body text-success">
            <h5 class="card-title">二月实施计划的第一月</h5>
            <p class="card-text">二月是小伙伴执行计划的第一个月，大家一定要坚持，坚持就是胜利。</p>
          </div>
        </div>
        <div class="card border-danger" style="width: 18rem;display: inline-block;">
          <div class="card-header">三月激励</div>
          <div class="card-body text-danger">
            <h5 class="card-title">三月激励</h5>
            <p class="card-text">三月我们会推出一些激励计划，帮助小伙伴度过艰难的时刻，坚持就是胜利。</p>
          </div>
        </div>
        <div class="card border-warning" style="width: 18rem;display: inline-block;">
          <div class="card-header">四月小假期</div>
          <div class="card-body text-warning">
            <h5 class="card-title">四月小假期</h5>
            <p class="card-text">四月有植树和清明的活动，放假期间大家坚持打卡的话会有激励。坚持就是胜利</p>
          </div>
        </div>
        <div class="card border-info" style="width: 18rem;display: inline-block;">
          <div class="card-header">五月休息一下</div>
          <div class="card-body text-info">
            <h5 class="card-title">劳动节</h5>
            <p class="card-text">虽然五月是劳动节，大家需要坚持刷题，但是稍微休息一下也未尝不可，注意劳逸结合。</p>
          </div>
        </div>
        <div class="card border-info" style="width: 18rem;display: inline-block;">
          <div class="card-header">六月，年中总结</div>
          <div class="card-body text-info">
            <h5 class="card-title">六月年中总结</h5>
            <p class="card-text">六月是半年过去的标志，回顾可以深刻的保持清醒。完成一半任务的同学会得到奖励。</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 历史活动 -->
    <div>
      <h5 class="title-padding">历史活动</h5>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                一月计划月
              </button>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              参与制定计划会获得过年红包。
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                三月激励
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              三月坚持一个月的小伙伴会得到应得的奖励
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                六月年中月
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              年中满足一下条件会得到奖励<br/>
              1.有年中总结<br/>
              2.完成上半年计划
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 话题参与 -->
    <div class="padding-top">
      <h5 class="title-padding">话题参与</h5>
      <ul class="list-group list-group-flush left-padding">
        <li class="list-group-item">一月我的计划完成了没有</li>
        <li class="list-group-item">三月我获得了多少激励</li>
        <li class="list-group-item">六月我的年中总结写了没</li>
      </ul>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import headerBar from '../components/headBar'
import footerBar from '../components/footerBar'
export default {
  name: 'commit',
  components: {
    headerBar,
    footerBar
  },
  methods: {
    slide (e) {
      let sildeBox = this.$refs.sideBox
      let inX = e.clientX - sildeBox.offsetLeft
      sildeBox.onmousemove = function (e) {
        // 鼠标位置-鼠标在盒子中的位置
        sildeBox.style.left = e.clientX - inX + 'px'
      }
      sildeBox.onmouseup = function () {
        sildeBox.onmousemove = null
        sildeBox.onmouseup = null
      }
    }
  }
}
</script>

<style scoped>
  .big-box {
    width: 100%;
    height: 230px;
    overflow: hidden;
    position: relative;
  }

  .content-box {
    width: 2600px;
    height: 230px;
    /* background-color: pink; */
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
