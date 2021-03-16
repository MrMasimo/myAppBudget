<template>
  <div class="total-value">
   <span :style="changeColorTotal"> Balance: {{ totalBalance }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TotalBalance",
  computed:{
    ...mapGetters('budgetData',['totalBalance']),
    changeColorTotal(){
      let color = "";
      const total = this.totalBalance;

      if (!total)
        color = "black";
      else if (total > 0)
        color = "green";
      else
      color = "red";
      return { color: color};
    },
  },
}
</script>

<style scoped>
.total-value{
  font-size: 26px;
  text-transform: uppercase;
  margin-top: 20;
  padding: 20;
}
</style>