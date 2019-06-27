<template>

    <div id="wrapper">
        <form v-on:submit.prevent="submit()">
        <div class="page-address-edit" data-log="地址">
            <div class="edit-box">
                <ul class="ui-list">
                    <li class="ui-list-item">
                        <div class="label">收货人：</div>
                        <div class="ui-input"><input placeholder="真实姓名" maxlength="15" type="text"
                                                     v-model="address.name"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">手机号码：</div>
                        <div class="ui-input"><input placeholder="手机号" maxlength="13" type="tel" v-model="address.tel" >
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">所在地区：</div>
                        <div class="ui-input">
                            <input placeholder="省 市 区"  type="text"  v-model="address.pcd"/>
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">街道地址：</div>
                        <div class="ui-input"><input placeholder="详细地址" maxlength="120" type="text"
                                                     v-model="address.site"></div>
                    </li>
                </ul>
                <div class="save-button">
                    <button type="submit" class="ui-button" ><span>保存地址</span></button>
                </div>
            </div>
            <div class="ui-mask" style="display:none;"></div>
            <div class="ui-pop" style="display:none;">
                <div class="ui-pop-content">
                    <div class="region-list">
                        <ul class="ui-list ui-list-bordered" id="city"></ul>
                    </div>
                </div>
                <div class="ui-pop-title">选择所在地区</div>
                <div class="ui-pop-close"><a><span class="icon-10chahaokuang"></span></a></div>
            </div>
            <div class="popup-risk-check"></div>
        </div>
        </form>
    </div>


</template>

<script>
    export default {
        name: "Newaddress",
        data() {
            return {
                address: {
                    name: '',
                    tel: '',
                    pcd: '',
                    site: ''
                }
            }
        },
        methods: {
            submit() {
                this.axios.post('api/address/new', this.address)
                    .then((res) => {
                        this.$router.push({name:'address'})
                })
            }
        }

    }


</script>


<style scoped >
    /*@import "/cityselect/cityselect/cityLayout.css";*/
</style>