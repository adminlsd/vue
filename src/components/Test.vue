<template>
    <div class="test">
        {{msg}}
        <router-link to="/">HelloWorld</router-link>
        <ul>
            <li v-for="item in list" :key="item"></li>
        </ul>
    </div>
</template>
<script>
import { resolve } from 'q'
import Axios from 'axios'
export default {
    name: 'test',
    data() {
        return{
            msg: '这是一个测试vue页面！',
            list: []    
        }
    },
    mounted () {
        this.getList();
    },
    methods: {
        getList(){
            this.$http.get("../mock/a.json").then((response)=>{
                console.info(response,'1111');
            }),(error)=>{
                console.error(error);
            }
            Axios.get("http://10.25.31.8:8080/query/getStationInfo?param1=1")
            .then((response)=> {
                console.info(response,'1111');
            })
            .catch((error)=> {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
.test{
    height: 100px;
    width: 100px;
    background: yellowgreen;
    margin: 0 auto;
    text-align: center;
}
</style>


