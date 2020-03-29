<template>
  <div>
    <head-bar></head-bar>
    <div class="small-box-padding">
      <div class="row">
        <div class="col-md-3" style="border-color: tomato;">
          <div class="card shadow">
            <div class="card-body">
              <a href="#" class="btn btn-danger">全部</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card shadow">
            <div class="card-body">
              <a href="#" class="btn btn-success">小学</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card shadow">
            <div class="card-body">
              <a href="#" class="btn btn-primary">中学</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card shadow">
            <div class="card-body">
              <a href="#" class="btn btn-warning">大学</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="input-group mb-3 small-box-padding">
      <input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜索</button>
      </div>
    </div>

    <table class="table small-box-padding">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">题目名称</th>
          <th scope="col">参与人数</th>
          <th scope="col">通过率</th>
          <th scope="col">难易程度</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <footerBar></footerBar>
  </div>
</template>

<script>
import headBar from '../components/headBar'
import footerBar from '../components/footerBar'
export default {
  name: 'practise',
  components: {
    headBar,
    footerBar
  }
}
</script>

<style scoped>

</style>
