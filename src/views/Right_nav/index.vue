<template>
  <div>
    <div class="Right-nav position-relative">
      <img
        id="Rimg"
        style="right: 0; display: block;"
        src="@/assets/images/Rig-Nav.jpg"
        alt="软件开发定制中心"
      />
      <router-link :to="{path:'/Index'}">
        <ul class="nav" style="right: -40%; display: block;">
          <li>
            <router-link :to="{path:'/Index'}">
              <div class="btn btn-outline-primary">
                <a>网站首页</a>
              </div>
            </router-link>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/About'}">关于我们</router-link>
            </div>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/News'}">新闻资讯</router-link>
            </div>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/Product'}">产品中心</router-link>
            </div>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/Case'}">案例展示</router-link>
            </div>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/About'}">人才招聘</router-link>
            </div>
          </li>
          <li>
            <div class="btn btn-outline-primary">
              <router-link :to="{path:'/About'}">联系我们</router-link>
            </div>
          </li>
        </ul>
      </router-link>
    </div>
    <div class="mainboxbg" style="display: none;"></div>
  </div>
</template>

<script>
import scll_RigNav from "@/utils/scll_RigNav";
// $(document).ready(function() {
// scll_RigNav()
// });
export default {
  name: "Right_nav",
  mounted() {
    // 优化加载功能
    setTimeout(() => {
      scll_RigNav();
    }, 300);
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/style.css");
@import url("../../assets/css/Right_nav/index.css");
@import url("../../styles/bgstyle.less");
</style>>
