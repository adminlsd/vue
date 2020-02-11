<template>
    <div class="child">
        <h2 style="color: red">下面是儿子部分</h2>
        <p>{{ sonMsg }}</p>
        <p>儿子收到的内容：{{ csMsg }}</p>
        <p>这本书的作者是：{{ $store.state.author }}</p>
        <input type="text" v-model="sendMsg">
        <button @click="setUser">发送</button>
    </div>
</template>
<script>
export default {
    name: 'erzi',
    data() {
        return{
            sonMsg: '儿子',
            sendMsg: ''
        }
    },
    props:['csMsg'],
    methods:{
        setUser:function() {
            this.$emit('transfer',this.sendMsg)
        }
    }
}
</script>
<style scoped>

</style>