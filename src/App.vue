<template>
  <div id="app">
    <theader />
    <Rotation-Rotation />
    <router-view />
    <Right-Right_nav />
    <Footer-Footer/>
  </div>
</template>

<script>
import theader from "@/components/theader/theader";
// import Rotation from "@/components/Rotation";
const Right_nav = () => import("@/views/Right_nav/index");
const Footer = () => import("@/components/Footer");
export default {
  name: "App",
  components: {
    theader,
    // "Rotation-Rotation":Rotation,
    "Right-Right_nav": Right_nav,
    "Footer-Footer":Footer
  }
};
</script>

<style lang="less" scoped>
// #app {
//   // font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   // -webkit-font-smoothing: antialiased;
//   // -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   // color: #2c3e50;
// }
</style>
