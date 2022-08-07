<template>
  <div>
    {{ msg }}
    <p v-once>这个数据不会被改变呢{{ msg }}</p>
    <!-- <p >v-html="color:red"<span v-html="color"></span></p> -->
    <p v-if="seen">现在你可以看见我了</p>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "pig",
      seen: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<style>
</style>