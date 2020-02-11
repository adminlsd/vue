<template>
    <div class="parent">
        <h1>{{ msg }}</h1>
        <p>爸爸接到的：{{ userName }}</p>
        <input type="text" v-model="inputTxt">
        <button @click="setAuthor">传参</button>
        <child csMsg="叫爸爸" @transfer="chuansong"></child>
    </div>
</template>
<script>
import child from './Child';
export default {
    name: 'baba',
    data() {
        return{
            msg: '爸爸',
            userName: '',
            inputTxt: ''
        }
    },
    components: {child},
    methods: {
        chuansong(msg) {
            this.userName = msg
        },
        setAuthor:function() {
            this.$store.commit('newAuthor',this.inputTxt)
        }
    }
}
</script>
<style scoped>

</style>