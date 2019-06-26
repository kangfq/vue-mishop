import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Show from './views/product/Show.vue'
import Checkout from './views/product/Checkout.vue'
import Login from './views/user/Login.vue'
import User from './views/user/Index.vue'
import Cart from './views/cart/Index.vue'
import Emptycart from './views/cart/Empty.vue'
import Category from './views/category/Index.vue'
import List from './views/category/List.vue'
import Newaddress from "./views/address/Newaddress";
import Address from "./views/address/Index";
import Pay from "./views/order/Pay";
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // linkActiveClass:'on',
  routes: [
    {
      path: '/address',
      name: 'address',
      component: Address,
      meta:{
        title:'地址'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
      meta:{
        title:'付款'
      }
    },
    {
      path: '/address/new',
      name: 'newaddress',
      component: Newaddress,
      meta:{
        title:'新建地址'
      }
      // component: ()=>import('./views/address/Newaddress.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      meta:{
        title:'创建订单'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta:{
        title:'个人中心'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/emptycart',
      name: 'emptycart',
      component: Emptycart,
      meta:{
        title:'购物车是空的'
      }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta:{
        title:'商品分类'
      }
    },
    {
      path: '/category/:id',
      name: 'list',
      component: List,
      meta:{
        title:'商品列表'
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'首页-365Buy'
      }
    },
    {
      path: '/:id',
      name: 'show',
      component: Show,
      meta:{
        title:'show'
      }
    },
  ]
})
