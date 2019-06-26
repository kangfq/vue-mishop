<template>
    <div id="wrapper">
        <div class="cart-index">
            <div class="cart-index-wrap">
                <div class="cart-list">
                    <ul>
                        <li class="item" v-for="cart in carts">
                            <div class="ui-box">
                                <div class="imgProduct"><a href="/1/#/product/view?product_id=1153200008">
                                    <img :src="cart.product.img"></a></div>
                                <div class="info ui-box-flex">
                                    <div class="name">
                                        <span>{{ cart.product.name}}</span>
                                    </div>
                                    <div class="price">
                                        <p>
                                            <span>售价：</span><span>{{ cart.product.price}}元</span>
                                            <span>合计：</span><span>{{ Number(cart.product.price * cart.num).toFixed(2) }}元</span>
                                        </p>
                                        <div class="tip">
                                            <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                                        </div>
                                    </div>
                                    <div class="num">
                                        <div class="xm-input-number">
                                            <div class="input-sub" :class="{ 'active':cart.num>1 }" @click="changeNum(cart.id,cart.num,'sub')"></div>
                                            <div class="input-num"><span>{{ cart.num}}</span></div>
                                            <div class="input-add active" @click="changeNum(cart.id,cart.num,'add')"></div>
                                        </div>
                                        <div class="delete">
                                            <a href="javascript:;">
                                                <span class="icon-iconfontshanchu" @click="changeNum(cart.id,cart.num,'del')"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="append"></div>
                        </li>

                    </ul>
                </div>
                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
                <div class="bottom-submit ui-box">
                    <div class="price"><span>共{{ totalCart.num }}件 金额：</span><br><strong>{{ Number(totalCart.price).toFixed(2) }}</strong><span>元</span>
                    </div>
                    <div class="btn">
                        <router-link :to="{name:'home'}">
                        <a class="ui-button ui-button-disable"
                                        ><span>继续购物</span></a>
                        </router-link>

                    </div>
                    <div class="btn"><router-link :to="{name:'checkout'}"><a class="ui-button"><span>去结算</span></a></router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                carts: [],
                totalCart: {}
            }
        },
        created() {
            this.init();
        },
        methods: {
            init: function () {
                this.axios.get('api/cart/index').then((res) => {
                    console.log(res.data)
                    this.carts = res.data.carts
                    this.totalCart = res.data.totalCart
                    if(res.data.carts==0){
                        this.$router.push({name:'emptycart'})
                    }
                })
            },
            changeNum(id,num,type) {
                if (num == 1 && type == 'sub') {
                    return false
                }
                this.axios.put('api/cart/changenum', {id: id, type: type}).then((res) => {
                    this.carts = res.data.carts
                    this.totalCart = res.data.totalCart
                    if(res.data.carts==0){
                        this.$router.push({name:'emptycart'})
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>