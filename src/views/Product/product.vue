<template>
  <div>
    <!-- <Rotation-Rotation /> -->

    <!--  -->
    <div class="pro-nav-item-box">
      <ul
        class="pro-nav-ul d-flex justify-content-around nav nav-pills py-2"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link active btn-outline-dark p-0"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <button type="button" class="btn btn-outline-info">C/S软件开发</button>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn-outline-dark p-0"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            <button type="button" class="btn btn-outline-info">B/S软件开发</button>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link btn-outline-dark p-0"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <button type="button" class="btn btn-outline-info">手机App软件开发</button>
          </a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <!--111 内容 -->
          <div class="card text-center pro-nav-item-box">
            <img src="@/assets/images/pro-a-0001.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">进销管理系统</p>
            </div>
          </div>
          <!-- 111end -->
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <!--222 内容 -->
          <div class="card text-center pro-nav-item-box">
            <img src="@/assets/images/pro-b-0001.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">企业OA管理系统</p>
            </div>
          </div>
          <!-- 222end -->
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <!--333 内容 -->
          <div class="card text-center pro-nav-item-box">
            <img src="@/assets/images/pro-c-0001.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">APP商城管理系统</p>
            </div>
          </div>
          <!-- 333end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const Rotation = () => import("@/components/Rotation");
export default {
  name: "Product",
  components: {
    // "Rotation-Rotation": Rotation,
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/style.css");
@import url("../../styles/variables.less");
.pro-nav-item-box {
  background-color: @pro-item;
}
.pro-nav-ul button {
  padding: 0 0.1rem 0 0.1rem;
}
.pro-card-img img {
  width: 10.6875rem;
  height: 5.6875rem;
}
</style>
