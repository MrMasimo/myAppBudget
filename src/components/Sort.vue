<template>
 <dir class="sort">
   <ElButton type="primary" size="mini" @click="sort('ALL')">All</ElButton>
   <ElButton type="primary" size="mini" @click="sort('INCOME')">INCOME</ElButton>
   <ElButton type="primary" size="mini" @click="sort('OUTCOME')">OUTCOME</ElButton>
 </dir>
</template>

<script>
export default {
  name: 'Sort',
  methods: {
    sort(view){
      this.$emit('sort', view);
    }
    }
}
</script>

<style scoped>
.sort {
  max-width: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 10px 15px;
};

</style>