<template>
    <div>
        <input type="email" v-model="customer.email" placeholder="请输入邮箱">
        <input type="password" v-model="customer.password" placeholder="请输入密码">
        <button @click="submit">登 录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                //将数据配置好
                const data = {
                    grant_type: 'password', //oauth的模式
                    client_id: 2,   //上面所说的client_id
                    client_secret: 'RfAHD1xjYxqpX5r2IoR4kvKirevBS8jph48BB8US',//同上
                    username: this.customer.email,
                    password: this.customer.password,
                }
                this.axios.post('/oauth/token', data)
                    .then(res => {
                        if (res.status == 200) { //如果成功了，就把access_token存入localStorage
                            localStorage.token_type = res.data.token_type
                            localStorage.access_token = res.data.access_token
                            this.$router.push({name: 'home'})
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>