<template>
    <div id="wrapper" style="display: block">
        <div class="page-product-view" data-log="商品详情">

            <div class="header">
                <div class="left"><a
                        onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-346f31c749f6e40d', '', 'pcpid']);history.go(-1)"
                        class="home" data-stat-id="346f31c749f6e40d"><img src="http://s1.mi.com/m/images/m/icon_back_n.png"
                                                                          class="ib"></a><!--vue-if--><!--vue-if--></div>
                <div class="tit"><!--vue-if--></div>
                <div class="right"><a href="javascript:;" data-event="30000000110001001" data-stat-id="6c93ea1c6bb6eb01"
                                      onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);">
                    <div class="icon icon-search"></div>
                </a></div>
            </div>

            <div class="product-view">
                <div class="b1">
                    <img :src="product.img">
                </div>
                <div class="b2">
                    <div class="b21">
                        <div class="b211">
                            <div class="name"><p>{{ product.name}}</p></div>
                            <div class="price"><strong>{{ product.price}}元</strong></div>
                        </div>
                        <div class="b212">
                            <div class="icon-fenxiang"></div>
                        </div>
                    </div>
                    <div class="b22">
                        <p>{{ product.description}}</p>
                    </div>
                </div>
                <div class="mt20" style="display: none;"></div>

                <!--<ul class="b3">-->
                <!--<li><span class="on">白色</span></li>-->
                <!--</ul>-->

                <ul class="b3" style="display: none;">
                    <li><span>通用</span></li>
                </ul>

                <div class="ui-b7">
                    <h3>为您推荐</h3>
                    <div class="ui-carousel-container">
                        <div class="ui-carousel-viewport">

                            <a v-for="rec_product in rec_products">
                                <router-link :to="{name:'show',params:{id:rec_product.id}}">
                                <img :src="rec_product.img">
                                </router-link>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="b5">
                    <div class="b51"></div>
                    <div class="b52">
                        <div class="blc">
                            <div v-html="product.content"></div>
                        </div>
                    </div>
                </div>
                <div class="b7">
                    <div class="b70">
                        <router-link :to="{name:'home'}">
                        <a >
                            <div class="icon-home"></div>
                        </a>
                        </router-link>
                    </div>
                    <div class="b72">
                        <a v-if="product.stock <= 0 " href="javascript:;" class="off">暂时缺货</a>
                        <a v-else href="javascript:;" @click="buy()">立即购买</a>
                    </div>

                    <div class="b73">
                        <a href="/">
                            <div class="icon-gouwuche"></div>
                        </a>
                    </div>
                </div>
                <a href="javascript:;" id="top" style="visibility: visible;">
                    <img src="http://s1.mi.com/m/images/m/top.png">
                </a>
            </div>
            <div class="share-component"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "show",
        data(){
            return {
                product:{},
                rec_products:[]
            }
        },
        created(){
            this.init();
        },
        watch:{
            $route:['init']
            // $route(to) {
            //         this.axios.get('api/product/'+to.params.id)
            //             .then((res=>{
            //                 this.product=res.data.product
            //                 this.rec_products=res.data.rec_products
            //             }))
            // }
        },
        methods:{
            init:function () {
                this.axios.get('api/product/'+this.$route.params.id)
                    .then((res=>{
                        this.product=res.data.product
                        this.rec_products=res.data.rec_products
                        document.title = this.product.name;
                    }))
            },
            buy(){
                console.log(this.product.id)
                this.axios.post('api/cart/addcart',{id:this.product.id}).then((res)=>
                    this.$router.push({name:'cart'})
                )
            }
        }
    }
</script>

<style scoped>

</style>