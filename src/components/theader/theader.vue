<template>
  <div>
    <div class="position-relative">
      <div
        class="mainbox nav-top d-flex justify-content-between align-items-center position-relative"
      >
        <div class="top-title btn-outline-success">
          <router-link :to="{path:'/Index'}">
            <img src="@/assets/images/logo.png" alt="逝音之巅软件开发" /><span>逝音之巅Software</span>
          </router-link>
        </div>
        <router-link :to="{path:'/Index'}">
          <fluid-fluid class="fixed-fl" />
        </router-link>
        <div class="nav-menu">
          <!-- <router-link :to="{path:'/Right_nav'}"> -->

             <img src="@/assets/images/菜单.jpg" alt />
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fluid = () => import("@/components/fluid");
$(document).ready(function() {});

export default {
  name: "theader",
  components: {
    "fluid-fluid": fluid
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.filex {
  --border-anim-size: 3em;
  --border-anim-size-w: 17.5rem;
  width: var(--border-anim-size-w);
  height: var(--border-anim-size);
}
.fixed-fl {
  position: absolute;
  z-index: 1;
  left: 0rem;
  top: 3%;
}
@import url("../../assets/css/style.css");
@import url("../../assets/css/index/index.css");
@import url("../../styles/bgstyle.less");
</style>>
