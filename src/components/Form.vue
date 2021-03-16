<template>
  <ElCard class="form-card">
    <ElForm :model="formData" :rules="rules" ref="addForm" >
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Please choose type">
          <ElOption label="Income" value="INCOME"></ElOption>
          <ElOption label="Outcome" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElButton @click="addItem" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Form",
  data() {
        let checkValue = (rule, value, callback) =>{
        if (!Number.isInteger(value)) {
          return callback(new Error('Please input digit value'));}
        else if (value <= 0) {
          return callback(new Error('Please input the value more 0'));
        } else
          callback();
        };
    return {
    formData:{
      type: 'INCOME',
      comment: '',
      value: 0,
    },
    rules: {
        type: [ {required: true, message: 'Please choose type', trigger: 'blur' }],
        comment: [ { required: true, message: 'Please input comment', trigger: 'blur'}],
        value: [
          { required: true, validator: checkValue, trigger: 'blur'}
        ],
      },
  }},
  methods: {
    ...mapActions('budgetData', ['onAddItem'] ),
    addItem(){
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === "OUTCOME")
          this.formData.value *= -1;
          this.onAddItem({...this.formData});
          this.$refs.addForm.resetFields();
        }
      });
    },

  },
}
</script>

<style scoped>
.form-card{
  max-width: 500px;
  margin:auto;
}
.type-select{
  width: 100%;
}
</style>