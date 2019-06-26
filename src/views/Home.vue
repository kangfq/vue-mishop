<template>
    <div id="wrapper">
      <div class="page-index" id="home" data-log="首页">
        <div class="index-header">
          <div class="search_bar">
            <a href="/1/#/search/index">
              <span class="icon icon-search"></span>
              <span class="text">搜索商品名称</span>
            </a>
          </div>
          <div class="search_bottom"></div>
        </div>

        <!--焦点图-->
        <section class="slider">
          <div class="flexslider">
            <ul class="slides">
              <li v-for="item in data.focus">
                <a :href="item.address">
                <img v-bind:src="item.img"/>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <!--推荐商品-->
        <div class="list">
          <div class="section">
            <div class="mcells_auto_fill">
              <div class="body">
                <div v-for="item in data.ads">
                  <div class="items">
                    <a :href="item.address">
                    <img v-bind:src="item.img" >
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="section" v-for="item in data.products">
            <router-link :to="{name:'show',params:{id:item.id}}">
            <div>
              <div class="item">
                <div class="img">
                  <img class="ico" v-bind:src="item.img">
                  <img class="tag" src="/mi-master/assets/img/new.png" v-show="item.is_new==1">
                  <img class="tag" src="/mi-master/assets/img/hot.png" v-show="item.is_hot==1">
                </div>
                <div class="info">
                  <div class="name"><p>{{ item.name}}</p></div>
                  <div class="brief"><p>{{ item.description}}</p></div>
                  <div class="price"><p>{{ item.price }}元 起</p></div>
                </div>
              </div>
            </div>
            </router-link>
          </div>
        </div>
        <my-footer/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        data: {}
      }
    },
    //初始化
    created() {
      this.init();
    },
    updated(){
      $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false
      });
    },
    methods: {
      init: function () {
        this.axios.get(`api`)
                .then((res) => {
                  this.data=res.data
                })
      }
    }
  }

</script>
