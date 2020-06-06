<template>
  <div class="son">
    <!-- <input :value="value" @input="Input" /> -->
    <input v-model="val" @input="Input" />
  </div>
</template>

<script>
export default {
  name: "son",
  props: ["value"],
  computed: {
    val: {
      get() {
        return this.value;
      },
      set() {
        console.log(this.val)
      }
    }
  },
  methods: {
    Input(e) {
      this.$emit("changeVal", e.target.value);
    }
  }
};
</script>