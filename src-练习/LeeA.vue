<template>
  <div>
    {{ msg }}
    {{ html }}
    <span v-html="html"> </span>
    <button @click="aaa"></button>
    <p v-bind:id="id">222222</p>
    <p :id="id">11</p>
    <button v-on:click="click">dianwo</button>
    <button @click="click">dianwo</button>
    <p v-if="seen">you can look me</p>
    {{ abc }}
    <p :style="{ color: red }">uu</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'Leeeee',
            html: `<h1 style='color:red'>Lee</h1>`,
            timer:null,
            id:2,
            seen:true,
            name:{
                 firstname:'z',
                lastname:'r'
            }
        }
    },
    methods: {
        aaa(){
            if(this.timer){
                clearTimeout(this.timer)
            }
           this.timer = setTimeout(()=>{console.log(new Date(),'aaa')},2000)
            alert('aaaaaa')
        },
        click(){
            alert('dianwo')
        }
    },
    computed:{
    //     abc(){
    //         return this.name.firstname+this.name.lastname

    //     }
    // }
    abc() {
        // 你用了箭头函数之后，this指向变了 是undefined
        console.log(this) //不用箭头函数，this就指向了 vue实例 明白了么？
            return this.name.firstname+this.name.lastname; // 你这里可以有分号，不应该是逗号
    }
    }
}
</script>

<style>
</style>