<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="About-nav-img-div carousel-item active" data-interval="2000">
          <img src="@/assets/images/About001.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="About-nav-img-div carousel-item" data-interval="2500">
          <img src="@/assets/images/About002.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="About-nav-img-div carousel-item" data-interval="2500">
          <img src="@/assets/images/About003.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="About-font-box">
      <p>核心价值观：诚信、创新、服务</p>
      <p>企业核心： 诚信</p>
      <p>企业精神： 团结拼搏、开拓求实、满足用户、科技进步。</p>
      <p>客户：为客户提供高质量和最大价值的专业化产品和服务，以真诚和实力赢得客户的理解、尊重和支持。</p>
      <p>市场：为客户降低采购成本和风险，为客户投资提供切实保障。</p>
      <p>发展：追求永续发展的目标，并把它建立在客户满意的基础上。</p>
      <p>关于“为合作伙伴创造价值”</p>
      <p>公司认为客户、供应商、公司股东、公司员工等一切和自身有合作关系的单位和个人都是自己的合作伙伴，并只有通过努力为合作伙伴创造价值，才能体现自身的价值并获得发展和成功。</p>
      <p>关于“诚实、宽容、创新、服务”</p>
      <p>公司认为诚信是一切合作的基础，宽容是解决问题的前提，创新是发展事业的利器，服务是创造价值的根本。公司会坚持持续改进、满足顾客期望、 确保品质第一、开拓全球市场。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="less" scoped>
@import url("../../styles/variables.less");
.About-font-box {
  background-color: @indexbg;
  padding:1rem;
}
.About-nav-img-div {
  height: 11.25rem !important;
}
.About-nav-img-div img {
  height: 100% !important;
}
// 字体
.About-font-box p{
  font-size:0.8rem;
}
</style>
