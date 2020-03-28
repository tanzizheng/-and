<template>
  <div class="nav-Footer">
    <p class="text-center">
      <a class="align-baseline" href="javascript:;">小黑屋&nbsp;<i class="align-text-bottom">|</i></a>
      <a class="nav-p-a-b font-weight-bold" href="http://xyj66.vip">©逝音之巅-Software</a>
    </p>
    <p class="text-center">
      <a class="align-baseline" href="javascript:;">使用条款&nbsp;<i class="align-text-bottom">|</i>&nbsp;客户隐私政策</a>
      <a href="http://beian.miit.gov.cn"><i class="align-text-bottom">|</i>&nbsp;京公网安备19009454号</a>
    </p>
    <div id="box" class="box">
      <div class="box-in"></div>
    </div>
  </div>
</template>

<script>
$(document).ready(function() {
  $("#box").hide();
  $(function() {
    //检测屏幕高度
    var height = $(window).height();
    //scroll() 方法为滚动事件
    $(window).scroll(function() {
      if ($(window).scrollTop() > height) {
        $("#box").fadeIn(500);
      } else {
        $("#box").fadeOut(500);
      }
    });
    $("#box").click(function() {
      $("body,html").animate({ scrollTop: 0 }, 500);
      // totop();
      return false;
    });
  });
  function totop() {
    let timer = null;
    box.onclick = function() {
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 50;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    };
  }
});
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
.nav-Footer {
  background-color: #edf3f6;
}
.nav-Footer p {
  margin: 0;
}
.nav-Footer p a {
  color: #333;
  text-decoration: none;
  font-size: 0.6rem;
}

// 返回顶部按钮
.box {
  position: fixed;
  right: 0.2rem;
  bottom:19rem;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  padding-top: 1rem;
  background-color: lightblue;
  border-radius: 20%;
  overflow: hidden;
  z-index: 888;
}
.box:hover:before {
  top: 50%;
}
.box:hover .box-in {
  visibility: hidden;
}
.box:before {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "回到顶部";
  width: 2.5rem;
  color: peru;
  font-weight: bold;
}
.box-in {
  visibility: visible;
  display: inline-block;
  height: 2.5rem;
  width: 2.5rem;
  border: 0.25rem solid black;
  border-color: white transparent transparent white;
  transform: rotate(45deg);
}
</style>
