<template>
  <div>
    <div>
<div class=" Cas-nav-tab-box row row-cols-2 m-0 position-relative">
        <div class="col p-1">
          <div class="card">
            <img src="@/assets/images/商城.jpg" class="card-img-top" alt="商城app管理系统" />
            <div class="card-body p-1">
              <div class="card-footer p-2">
                <h6 class="card-title text-muted text-center m-0">商城app管理系统</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col p-1">
          <div class="card">
            <img src="@/assets/images/企业OA.jpg" class="card-img-top" alt="企业OA管理系统" />
            <div class="card-body p-1">
              <div class="card-footer p-2">
                <h6 class="card-title text-muted text-center m-0">企业OA管理系统</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col p-1">
          <div class="card mb-1">
            <img src="@/assets/images/进销.jpg" class="card-img-top" alt="进销存管理系统" />
            <div class="card-body p-1">
              <div class="card-footer p-2">
                <h6 class="card-title text-muted text-center m-0">进销存管理系统</h6>
              </div>
            </div>
          </div>
        </div>
        <!-- 查看更多 -->
        <div class="case-footer d-flex align-items-center justify-content-center">
          <a class="" href="javascript:;">查看更多</a>
          <img class="" src="@/assets/images/加号.png" alt="查看更多" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case'
}
</script>

<style lang="less" scoped>
@import url("../../styles/variables.less");
@import url("../../assets/css/style.css");
.Cas-nav-tab-box{
  background-color: @indexbg;
}
.case-footer{
  height: 4rem;
  font-size:1.1rem;
  font-weight:600;
}
.case-footer a{
  color: #222;
}
</style>
