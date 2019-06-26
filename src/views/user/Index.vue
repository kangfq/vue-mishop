<template>
    <div id="wrapper">
        <div class="page-personal-center" data-log="个人中心">

            <div class="b1">
                <div class="new_info">
                    <div>
                        <div class="name"></div>
                        <div class="img"><img src="http://s1.mi.com/m/images/m/default.png"></div>
                    </div>
                </div>
                <div class="new_nav">
                    <ul>
                        <li>
                            <a href="javascript:;" data-event="40000000100060001">
                                <div class="spr spr1"></div>
                                <p>全部订单</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-event="40000000100060002">
                                <div class="spr spr2"></div>
                                <p>待付款</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" data-event="40000000100060003">
                                <div class="spr spr3"></div>
                                <p>待收货</p>
                                <div class="line n"></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <ol class="list">
                <li data-event="40000000100060005"><strong class="sprl ise"></strong><a>意见反馈</a></li>
                <li data-event="40000000100060006"><strong class="sprl is"></strong><a href="address_manage.html">地址管理</a>
                </li>
            </ol>
<my-footer/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>