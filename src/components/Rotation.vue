<template>
  <div class="d-flex justify-content-center" ref="nav_h">
    <div class="banner" id="banner1">
      <div class="banner-view"></div>
      <div class="banner-btn"></div>
      <div class="banner-number"></div>
      <div class="banner-progres"></div>
    </div>
  </div>
</template>

<script>
import FragmentBanner from "@/utils/banner.js";

export default {
  data() {
    return {
      obj: {
        container: "#banner1", //选择容器 必选
        imgs: [
          "http://xyj66.vip:8088/img/碎片轮播001.jpg",
          "http://xyj66.vip:8088/img/碎片轮播002.jpg",
          "http://xyj66.vip:8088/img/碎片轮播003.jpg"
        ], //图片集合 必选
        size: {
          width: 0,
          height: 180
        }, //容器的大小 可选
        //行数与列数 可选
        grid: {
          line: 8,
          list: 6
        },
        index: 0, //图片集合的索引位置 可选
        type: 2, //切换类型 1 ， 2 可选
        boxTime: 5000, //小方块来回运动的时长 可选
        fnTime: 10000 //banner切换的时长 可选
      }
    };
  },
  methods: {
    // 碎片轮播
    Fragment() {
      let Width = this.$refs.nav_h.offsetWidth;
      let height = this.$refs.nav_h.offsetHeight;
      this.obj.size.width = Width;
      new FragmentBanner(this.obj);
    }
  },
  mounted() {
    // 优化加载功能
    setTimeout(() => {
      this.Fragment();
    }, 3000);
  }
};
</script>

<style>
.banner {
  position: relative;
  overflow: hidden;
}
.banner-view {
  position: relative;
  height: 100%;
  z-index: 5;
  background-color: #090b22;
  background-repeat: no-repeat;
}
.banner-view i {
  position: relative;
  display: block;
  float: left;
  background-repeat: no-repeat;
}
.banner-btn {
  position: absolute;
  width: 100%;
  height: 0;
  top: 35%;
  font-family: "宋体";
  font-size: 20px;
  z-index: 5;
}
.banner-btn span {
  display: block;
  float: left;
  width: 50px;
  line-height: 50px;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: #74dcff;
  cursor: pointer;
  font-weight: 800;
}
.banner-btn span:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.banner-btn span + span {
  float: right;
}
.banner-number {
  position: absolute;
  bottom: 35px;
  width: 100%;
  height: 0;
  font-size: 0;
  text-align: center;
  z-index: 100;
}
.banner-number > * {
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 0 8px;
  width: 10px;
  height: 10px;
  background-color: #00c3ff;
  cursor: pointer;
}
.banner-number > *:hover,
.banner-number > *.on {
  background-color: #ffc300;
}
.banner-progres {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 3px;
  z-index: 100;
}
.banner-progres i {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  display: block;
  height: 100%;
  width: 0;
}
</style>>

