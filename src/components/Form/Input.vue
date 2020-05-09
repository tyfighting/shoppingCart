<template>
  <div>
    <input :value="value" @input="onInput" :type="type" />
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String, default: "" },
    type: { type: String, default: "text" }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    }
  }
};
</script>