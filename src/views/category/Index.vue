<template>
    <div id="wrapper">
        <div class="page-category" data-log="商品分类">
            <div class="page-category-wrap">
                <div class="list-wrap" v-for="category in data">
                    <h3 class="list_title">{{ category.name }}</h3>
                    <ol class="list_category">
                        <li v-for="child in category.child">
                            <router-link :to="{name:'list',params:{id:child.id}}">
                            <div class="img"><img :src="child.img"></div>
                            <div class="name"><span>{{ child.name }}</span></div>
                            </router-link>
                        </li>
                    </ol>
                </div>
            </div>
            <my-footer/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                data:{}
            }
        },
        created() {
            this.init();
        },
        methods:{
            init:function () {
                this.axios.get('api/category/index').then((res)=>{
                    this.data=res.data
                })
            }
        }
    }
</script>

<style scoped>

</style>