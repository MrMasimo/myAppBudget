<template>
  <div class="list-item">
    <i :class="changeIcon"></i>
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value" :class="changeColorValue">{{ item.value }}</span>
    <ElButton @click="dialogVisible = true" type="danger" size="mini" >Delete</ElButton>
    <ElDialog title="Delete Item" :visible.sync="dialogVisible" width="30%"
    :show-close='false'>
    <span>{{ item.comment }} </span>
    <span slot="footer" class="dialog-footer">
      <ElButton @click="dialogVisible = false">Cancel</ElButton>
      <ElButton type="primary" @click="[dialogVisible  = false, deleteItemFromList(item.id)]">Delete</ElButton>
    </span>
  </ElDialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
name: 'BudgetListTemp',
data:()=>({
  iconTop:"el-icon-top",
  iconBottom:"el-icon-bottom",
  dialogVisible: false,
}),
props:{
  item:{
    type:Object,
    default: () => ({})
  }
},
computed:{
  changeIcon(){
    if (this.item.type === "INCOME"){
      return this.iconTop;
    }
    else
    return this.iconBottom;
  },
  changeColorValue(){
    if (this.item.type === "INCOME"){
      return "style-top";
    }
    else
    return "style-bottom";
  }
},
methods:{
  ...mapActions('budgetData', ['onDeleteItem']),
  deleteItemFromList(id){
    this.onDeleteItem(id);
  },
}
}

</script>


<style scoped>
.budget-value{
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.list-item{
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.style-top{
  color:green;
}
.style-bottom{
  color:red;
}
</style>