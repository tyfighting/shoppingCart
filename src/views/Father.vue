<template>
  <div class="login">    
    <input v-model="value">
    <son v-model="value" @changeVal="change"></son>
  </div>	
</template>

<script>
  import son from './Son'
  export default {
    name:'login',
    components:{
      son
    },
    data(){
      return {
        value:''
      };
    },
    methods:{
      change(val){
        this.value=val
      }
    }
  }
</script>

