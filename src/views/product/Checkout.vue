<template>
    <div class="wrap">

        <div class="page-order-checkout">
            <div class="page-order-checkout-wrap">
                <div class="b1 icon_arrow" v-if="address==null">
                    <router-link :to="{ name:'newaddress' }">
                        <div class="b11"><p><span>没有设置默认地址 Orz!</span></p></div>
                        <div class="b13"><p style="color:red"> 点击新建地址</p></div>
                    </router-link>
                </div>

                <div class="b1 icon_arrow" v-else>
                    <router-link :to="{ name:'address' }">
                        <div class="b11"><p><span>{{ address.name }}</span><span>{{ address.tel }}</span></p></div>
                        <div class="b13"><p>{{ address.province }} {{  address.city }} {{ address.county }} {{ address.site }}</p></div>
                    </router-link>
                </div>

                <div class="ui_line"></div>
                <div class="b2">
                    <ul>
<!--                        <li class="on"><a href="javascript:;" class="alipaywap">支付宝支付</a></li>-->
<!--                        <li class=""><a href="javascript:;" class="wechatpay">货到付款</a></li>-->
                    </ul>
                </div>
                <div class="ui_line"></div>
                <div class="b8">
                    <div class="b8w" v-for="cart in carts">
                        <div class="b81">
                            <div class="img"><img :src="cart.product.img">
                            </div>
                        </div>
                        <div class="b82">
                            <div class="name"><p>
                                <span>{{ cart.product.name }} X {{ cart.num }}</span></p></div>
                        </div>
                        <div class="b83">
                            <div class="price"><strong>{{ cart.product.price }}元</strong></div>
                        </div>
                    </div>
                </div>
                <div class="ui_line"></div>
                <div class="b5">
                    <div class="b51"><p><strong>商品价格：</strong><span>{{Number(totalCart.price).toFixed(2) }}元</span></p></div>
                    <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
                </div>
                <div class="b7">
                    <div class="b71"><span>共{{  totalCart.num }}件 合计: </span><strong>{{  Number(totalCart.price).toFixed(2) }}元</strong></div>
                    <div class="b72">

                        <a class="ui-button" @click="pay()"><span>去付款</span></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Checkout",
        created() {
            this.init()
        },
        data(){
            return{
                address:{},
                carts:[],
                totalCart:{}
            }
        },
        methods:{
            init:function () {
                this.axios.get('api/cart/checkout').then((res)=>{
                    this.address=res.data.address
                    this.carts=res.data.carts
                    this.totalCart=res.data.totalCart
                })
            },
            pay(){
                this.axios.post('api/order/pay').then((res)=>{
                    if(res.data.status==0){
                        alert(res.data.msg)
                        this.$router.push({name:'cart'})
                    }
                    this.$router.push({name:'pay'})
                })
            }
        }
    }
</script>

<style scoped>

</style>