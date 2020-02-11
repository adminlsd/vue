<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
    <p>{{ vueVoteCount }}</p>
    <p>{{ this.$store.getters.getStateCount }}</p>
    <p>{{ nodeVoteCount }}</p>
    <div>
      <input type="checkbox" id="checkbox" v-model="vind">
      <label for="checkbox">{{ vind }}</label>
    </div>
    <div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>
    <ul>
      <li v-for="item in dataList" v-bind:key="item.id">
        <p>{{ item.productName }}</p>
        <p>{{ item.productPrice }}</p>
      </li>
    </ul>
    <button @click="addFun"> + </button>
    <button @click="reduceFun"> - </button>
    <el-button type="danger" round>危险按钮</el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <router-link to="/test">test</router-link>
    <router-link to="/parent">parent</router-link>
  </div>
</template>

<script>
import {vuex,mapState} from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: '',
      vind: true,
      message: 'hello'
    }
  },
  mounted () {
    this.getList();
  },
  computed:mapState(["vueVoteCount","nodeVoteCount"]),
  methods:{
    addFun(){
      this.$store.dispatch('addFun',2)
    },
    reduceFun(){  
      this.$store.dispatch('reduceFun',5)
    },
    getList(){
      this.axios.get('/api/k').then(request => {
        console.log(request);
        this.dataList = request.data.result;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
