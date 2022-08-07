<template>
  <div>{{msg}}
      {{html}}
      <span v-html="html"> </span>
      <button @click="aaa"></button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'Lee',
            html: `<h1 style='color:red'>Lee</h1>`,
            timer:null
        }
    },
    methods: {
        aaa(){
            if(this.timer){
                clearTimeout(this.timer)
            }
           this.timer = setTimeout(()=>{console.log(new Date(),'aaa')},2000)
            alert('aaaaaa')
        }
    },

}
</script>

<style>

</style>