<template>
    <div id="wrapper">
        <div class="page-list" data-log="商品列表">
            <ol class="version">
                <li v-for="product in data.products">
                    <router-link :to="{name:'show',params:{id:product.id}}">
                    <a class="version-item" >
                        <div class="version-item-img"><img
                                :src="product.img">
                        </div>
                        <div class="version-item-intro">
                            <div class="version-item-name"><p>{{ product.name }}</p></div>
                            <div class="version-item-intro-price"><span>{{ product.price }}元</span></div>
                        </div>
                    </a>
                    </router-link>
                </li>

            </ol>
<my-footer/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
            return{
                data:{}
            }
        },
        created() {
            this.init()
        },
        methods:{
            init:function () {
                this.axios.get('api/category/'+this.$route.params.id).then((res)=>{
                    this.data=res.data
                    document.title = this.data.name;
                })
            }
        }
    }
</script>

<style scoped>

</style>