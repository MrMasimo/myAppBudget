<template>
  <div id="app">
    <Form @addItem='onAddItem'/>
    <TotalBalance :total='totalBalance'/>
    <Sort @sort='onSort'/>
    <BudgetList @deleteItem='onDeleteItem' :list='showList'/>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList'
import Form from '@/components/Form'
import TotalBalance from '@/components/TotalBalance'
import Sort from '@/components/Sort'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { BudgetList,
    TotalBalance,
    Form,
    Sort
  },
  data: () => ({
    list: {
      1:{
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1
        },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some out comment',
        id: 2
      }
    },
    show: 'ALL'
  }),
  computed:{
    totalBalance(){
      return Object.values(this.list).reduce((acc,item) =>  acc + item.value , 0)
    },
    showList(){
      if (this.show ==="ALL")
        return this.list;
      else {
        let newList = Object.values(this.list).reduce((acc,item) =>  {
          if(item.type == this.show)
           acc[item.id] = item;
          return acc;
          } , {});
        return newList;
      }
    },
  },
  methods:{
    onDeleteItem(id){
      this.$delete(this.list, id);
    },
    onAddItem(data){
      const newObj = {
        ...data,
        id: String(Math.random()),
      }
      this.$set(this.list, newObj.id, newObj);
    },
    onSort(view){
      this.show = view;
    },
  }
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
