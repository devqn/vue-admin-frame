<template>
  <div class="User">
    <ul>
      <li v-for="item in userList" >{{item.userName}} </li>
      <h2>{{message}}</h2>
      <h1>这是about page</h1>
    </ul>
  </div>
</template>

<script>
import {getlist} from "@/api/setting/user"

export default {
  name: "User",
  components: {},
  data() {
    return {
      message: "",
      userList: null
    }
  },
  created() {
    this.listUser();
  },
  methods: {
    // 查询用户列表
    listUser() {
      this.load = true;
      getlist().then(response => {
        this.userList = response.dataTag;
        this.message = response.msgTag;
        this.loading = false;
      })
    }
  }
}

</script>