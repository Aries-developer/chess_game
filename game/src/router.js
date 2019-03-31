import Vue from 'vue'
import Router from 'vue-router'
//模板1---------------------------------------------------------------------------------------------------|
//登录组件路由
import Home from '@/views/mode1/interface/Home'
import Business from '@/views/mode1/interface/Business'
import Personal from '@/views/mode1/interface/Personal'
const Login = () => import(/* webpackChunkName:'mode1-login'*/ '@/views/mode1/login/Login')
const Sms = () => import(/* webpackChunkName:'mode1-login'*/ '@/views/mode1/login/Sms')
const Password = () => import(/* webpackChunkName:'mode1-login'*/ '@/views/mode1/login/Password')
const Register = () => import(/* webpackChunkName:'mode1-login'*/ '@/views/mode1/login/Register')
//↑模板1--------------------------------------------------------------------------------------------------|

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      //默认主页
      path: '/',
      redirect: 'Login'
    },
//模板1---------------------------------------------------------------------------------------------------
    {
      path: '/home',//大厅
      name: 'Home',
      component: Home
    },
    {
      path: '/business',//充值
      name: 'Business',
      component: Business
    },
    {
      path: '/personal',//会员
      name: 'Personal',
      component: Personal
    },
    {
      path: '/login',//登录
      name: 'Login',
      component: Login
    },
    {
      path: '/login/register',//注册
      name: 'Register',
      component: Register
    },
    {
      path: '/login/sms',//短信登录
      name: 'Sms',
      component: Sms
    },
    {
      path: '/login/password',//找回密码
      name: 'Password',
      component: Password
    }
//↑模板1--------------------------------------------------------------------------------------------------|
  ],
  linkActiveClass: 'active'
})
