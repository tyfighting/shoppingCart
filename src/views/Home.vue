<template>
  <div class="home">
    <h1>购物车</h1>
    <hr />
    <div>
      <h2>添加课程</h2>
      <div>
        <label for="name">课程名称：</label>
        <input type="text" id="name" v-model="courseInfo.name" />
      </div>
      <div>
        <label for="price">课程价格：</label>
        <input type="text" id="price" v-model="courseInfo.price" />
      </div>
      <div>
        <button @click="addToList">添加到课程列表</button>
      </div>
      <hr />
    </div>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
        </tr>
        <tr v-for="(item, index) in courseList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><button @click="addToCart(index)">添加到购物车</button></td>
        </tr>
      </table>
      <hr />
    </div>
    <cart :courseItem="courseItem" @remove="remove"></cart>
  </div>
</template>

<script>
import Cart from "../components/Cart/Cart";
export default {
  name: "Home",
  components: {
    Cart
  },
  data() {
    return {
      courseInfo: [
        {
          name: "",
          price: ""
        }
      ],
      courseItem: [],
      courseList: [
        {
          id: 0,
          name: "web全栈开发架构师",
          price: 1000
        },
        {
          id: 1,
          name: "pathon人工智能",
          price: 500
        }
      ]
    };
  },
  methods: {
    addToCart(index) {
      let item = this.courseList[index];
      let isHasList = this.courseItem.find(x => x.id == item.id);
      if (isHasList) {
        this.courseItem[index].number++;
      } else {
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true
        });
      }
    },
    addToList() {
      this.courseList.push(this.courseInfo);
    },
    remove(index) {
      this.courseItem.splice(index, 1);
    }
  }
};
</script>
