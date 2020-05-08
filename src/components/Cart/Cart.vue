<template>
  <div>
    <h2>购物车</h2>
    <table>
      <tr>
        <th>勾选</th>
        <th>课程名称</th>
        <th>课程价格</th>
        <th>数量</th>
        <th>价格</th>
      </tr>
      <tr v-for="(item, index) in courseItem" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.isActive" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="minus(index)">-</button>
          {{ item.number }}
          <button @click="add(index)">+</button>
        </td>
        <td>{{ item.price * item.number }}</td>
      </tr>
      <tr>
        <td colspan="2">{{ isActiveCourse }}/{{ allCourseList }}</td>
        <td colspan="2">{{ allPrice }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: ["courseItem"],
  methods: {
    minus(index) {
      let number = this.courseItem[index].number;
      if (number > 1) {
        this.courseItem[index].number--;
      } else {
        if (window.confirm("确定删除吗？")) {
          this.$emit("remove", index);
        }
      }
    },
    add(index) {
      this.courseItem[index].number++;
    }
  },
  computed: {
    isActiveCourse() {
      return this.courseItem.filter(item => item.isActive).length;
    },
    allCourseList() {
      return this.courseItem.length;
    },
    allPrice() {
      let price = 0;
      this.courseItem.forEach(item => {
        if (item.isActive) {
          price += item.price * item.number;
        }
      });
      return price;
    }
  }
};
</script>