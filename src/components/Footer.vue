<template>
    <div class="footer">
        <ul>
            <li>
                <router-link :to="{name:'home'}">
                <a class="on">
                    <div class="nav">
                        <div class="ih ispr"></div>
                        <p>商城</p>
                    </div>
                </a>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'category'}">
                <a >
                    <div class="nav">
                        <div class="ic ispr"></div>
                        <p>分类</p>
                    </div>
                </a>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'cart'}">
                <a >
                    <div class="nav">
                        <div class="is ispr"></div>
                        <p>购物车</p>
                    </div>
                </a>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'user'}">
                    <div class="nav">
                        <div class="if ispr"></div>
                        <p>服务</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>