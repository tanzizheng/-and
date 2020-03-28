<template>
  <div>
    <!-- 轮播 -->
    <!-- <Rotation-Rotation /> -->
    <div class="index-nav">
      <div class="index-a-div float-left">
        <img src="@/assets/images/index.jpg" alt="软件定制开发" />
      </div>
      <div>
        <p class="index-a-p mb-n2 pt-3">
          <span class="card-header p-0">逝音之巅Software</span>
        </p>
        <div class="card-body text-left">
          <p
            class="card-text"
          >核心价值观：诚信、创新、服务 企业核心： 诚信 企业精神： 团结拼搏、开拓求实、满足用户、科技进步。 客户：为客户提供高质量和最大价值的专业化产品和服务，以真诚和实力赢得客户的理解、尊重和支持。 市场：为客户降低采购成本和风险，为客户投资提供切实保障。 发展：追求永续发展的目标，并把它建立在客户满意的基础上。 关于为合作伙伴创造价值 公司认为客户、供应商、公司股东、公司员工等一切和自身有合作关系的单位和个人都是自己的合作伙伴，并只有通过努力为合作伙伴 ...</p>
        </div>
      </div>
    </div>

    <!-- Pro -->
    <div class="d-flex justify-content-center">
      <div class="index-Pro-ti d-flex bd-highlight align-items-center">
        <img class="ml-auto" src="@/assets/images/产品中心S.png" alt="产品中心S" />&nbsp;
        <span>Products</span>&nbsp;
        <span class="mr-auto">产品中心</span>
      </div>
    </div>
    <!-- prolist -->
    <div class="Pro-item-box pb-4">
      <div class="row row-cols-2 m-0 position-relative">
        <div v-for="(item,index) of prolist" :key="index" class="col p-1">
          <div class="card">
            <img :src="item.img" class="card-img-top" alt="商城app管理系统" />
            <div class="card-body p-1">
              <div class="card-footer p-2">
                <h6 class="card-title text-muted text-center m-0">{{item.title}}</h6>
              </div>
            </div>
          </div>
        </div>
        <!-- 查看更多 -->
          <div class="pro-footer text-center">
            <router-link :to="{path:'/Product'}" class="align-self-end" href="javascript:;">查看更多</router-link :to="{path:'/Index'}">
            <img src="@/assets/images/加号.png" alt="查看更多" />
          </div>
      </div>
    </div>
    <!-- 新闻 -->
    <div>
      <div class="index-Pro-ti d-flex bd-highlight align-items-center">
        <img class="ml-auto" src="@/assets/images/新闻.png" alt="产品中心S" />&nbsp;
        <span>News</span>&nbsp;
        <span class="mr-auto">新闻资讯</span>
      </div>
      <div class="row row-cols-2 m-0 position-relative">
        <div v-for="(item,index) of newslist" :key="index" class="col p-0">
          <div class="card border-success mb-2" style="max-width: 18rem;">
            <div class="card-header">{{item.ti}}</div>
            <div class="card-body text-success">
              <h6 class="card-title">{{item.id}}</h6>
              <p class="card-text">{{item.nption}}</p>
            </div>
          </div>
        </div>
        <!-- 查看更多 -->
        <div class="pro-footer text-center">
          <router-link :to="{path:'/News'}" class="align-self-end">查看更多</router-link>
          <img src="@/assets/images/加号.png" alt="查看更多" />
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div>
      <div class="mt-4 index-Pro-ti d-flex bd-highlight align-items-center">
        <img class="ml-auto" src="@/assets/images/88高科技.png" alt="产品中心S" />&nbsp;
        <span>CASE SHOW</span>&nbsp;
        <span class="mr-auto">案例展示</span>
      </div>
      <!-- @/assets/images/案例01.jpg -->
      <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/images/案例01.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>标题一</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/案例02.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>标题二</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/案例03.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>标题三</h5>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import formatTime from '@/utils/formatTime.js'
// const Rotation = () => import("@/components/Rotation");
export default {
  name: "Index",
  components: {
    // "Rotation-Rotation": Rotation
  },
  data() {
    return {
      prolist: [], //产品信息
      newslist:[],//新闻列表
    };
  },
  created() {
    //周期函数(页面渲染)
    this.get_prolist();
    this.get_newslist();
  },
  methods: {
    get_prolist() {//产品信息
      let url = "/";
      this.axios.get(url).then(res => {
        this.prolist = res.data.data;
        // console.log(this.prolist);
      });
    },
    get_newslist(){//
   let url = "/news";
      this.axios.get(url).then(res => {
        let news_val = res.data.data
        // this.newslist.push(res.data.data);
        for(let i=0,len=news_val.length;i<len;i++){
          if(news_val[i].ti){
            let data = news_val[i].ti
             news_val[i].ti=data.split('T')[0]

          }
        }
        this.newslist=news_val
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/variables.less");
@import url("../../assets/css/style.css");
// Pro
.index-Pro-ti {
  background-color: #c7edcc;
  width: 100%;
  text-align: center;
  color: #008000;
  padding: 1rem;
}
.index-Pro-ti span {
  font-size: 1.3rem;
}
.index-Pro-ti img {
  width: 2rem;
  height: 2rem;
}
// 查看更多
.pro-footer {
  position: absolute;
  bottom: -1.3rem;
  left: 50%;
  width: 6rem;
  height: auto;
  margin-left: -2.8rem;
  border: 1px solid #007bff;
}
.pro-footer img {
  width: 1rem;
  height: 1rem;
  margin-top: -0.2rem;
}
// 主页介绍
.index-nav {
  background-color: @indexbg;
}
// Pro
.Pro-item-box {
  background-color: @indexbg;
}
.index-a-p > span {
  color: #ff9012;
  background: url("../../assets/images/tic01.jpg") no-repeat;
  background-size: auto 100%;
  padding-left: 0.6rem !important;
}
.index-a-div {
  margin: 1rem 1.2rem 0 1.5rem;
  width: 6.25rem;
  height: 9.375rem;
}
.index-a-div img {
  width: 100%;
  height: 100%;
}
</style>
