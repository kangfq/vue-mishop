import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
// import axios from 'axios'
import axios from './http.js'
import './registerServiceWorker'
import Footer from '@/components/Footer.vue'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component('my-footer', Footer)
new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

