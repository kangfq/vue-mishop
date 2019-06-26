<template>
    <div id="wrapper">
        <div class="page-address-list" data-log="地址列表">
            <div class="address-choose">
                <ul class="ui-list" v-for="address in addresses" @click="selectaddress(address.id)">
                    <li class="ui-list-item"><p class="ui_fz30"><span class="consignee">{{ address.name }}</span><span>{{ address.tel }}</span>
                    </p>
                        <p>{{ address.province }} {{ address.city }} {{ address.county }}</p>
                        <p>{{ address.site }}</p></li>
                </ul>

            </div>
            <router-link :to="{name:'newaddress'}">
            <div class="add"><a  class="ui-button ui-button-active"><span>新建地址</span></a></div>
            </router-link>
            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index.vue",
        data(){
            return{
                addresses:{}
            }
        },
        created() {
            this.init()
        },
        methods:{
            init:function () {
                this.axios.get('api/address/index').then((res)=>{
                    this.addresses=res.data
                })
            },
            selectaddress(id){
                this.axios.post('api/address/selectaddress',{id:id}).then((res)=>{
                    this.$router.push({name:'checkout'})
                })
            }
        }
    }
</script>

<style scoped>

</style>