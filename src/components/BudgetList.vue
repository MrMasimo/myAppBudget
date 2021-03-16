<template>
  <div class="budget-list-wrap">
    <ElCard :header='header'>
      <template v-if="!isEmpty">
        <div v-for="(item,prop) in list" :key="prop">
          <BudgetListTemp @deleteItemFromList='deleteItem' :item='item'/>
        </div>
      </template>
      <ElAlert v-else :title="title" type='info' :closable='false'></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListTemp from '@/components/BudgetListTemp'

export default {
  name: 'BudgetList',
  components: { BudgetListTemp},
  props:{
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data:() => ({
    header: "Budget List",
    title: "Empty",
  }),
  computed:{
    isEmpty(){
      return !Object.keys(this.list).length;
    },
    classImage(){
      console.log(this.list);
      if (this.list === "INCOME")
        return "el-icon-top";
      else return "el-icon-bottom";
    },
  },
  methods:{
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
};
</script>

<style scoped>
.budget-list-wrap{
  max-width: 500px;
  margin: auto;
}
</style>