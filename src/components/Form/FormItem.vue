<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
    <p v-if="errorStatus">errorMsg</p>
  </div>
</template>
<script>
import Schema from "async-validate";
export default {
  props: ["label", "prop"],
  inject: ["kForm"],
  data() {
    return {
      errorMsg: "",
      errorStatus: false
    };
  },
  mounted() {
    this.$on("validat", this.validator);
  },
  methods: {
    validator() {
      const rule = this.kForm.rules[this.prop];
      const value = this.kForm.model[this.prop];
      const descriptor = { [this.prop]: rule };
      const schema = new Schema(descriptor);
      schema.validate({ [this.prop]: value }, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    }
  }
};
</script>