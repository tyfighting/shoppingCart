<template>
  <div>
    <h1>form表单</h1>
    <k-form :model="model" :rules="rules" ref="form">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" type="text"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" type="password"></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>
<script>
import KInput from "../components/Form/Input";
import KFormItem from "../components/Form/FormItem";
import KForm from "../components/Form/Form";

export default {
  data() {
    return {
      value: "",
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  }
};
</script>