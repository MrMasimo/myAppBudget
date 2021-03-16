<template>
  <div id="app">
    <Form />
    <TotalBalance />
    <Sort />
    <BudgetList/>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList'
import Form from '@/components/Form'
import TotalBalance from '@/components/TotalBalance'
import Sort from '@/components/Sort'

export default {
  name: 'App',
  components: { BudgetList,
    TotalBalance,
    Form,
    Sort
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
