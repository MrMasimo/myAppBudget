<template>
  <div class="budget-list-wrap">
    <ElCard :header='header'>
      <template v-if="!isEmpty">
        <div v-for="(item,prop) in budget" :key="prop">
          <BudgetListTemp :item='item'/>
        </div>
      </template>
      <ElAlert v-else :title="title" type='info' :closable='false'></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListTemp from '@/components/BudgetListTemp'
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetList',
  components: { BudgetListTemp},
  data:() => ({
    header: "Budget List",
    title: "Empty",
  }),
  computed:{
    ...mapGetters('budgetData', ['budget']),
    isEmpty(){
      return !Object.keys(this.budget).length;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap{
  max-width: 500px;
  margin: auto;
}
</style>