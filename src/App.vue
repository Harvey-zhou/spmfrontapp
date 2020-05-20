<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="../src/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      <a class="navbar-brand" href="#">SPM</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li :class="classNonActive" ref="introduction">
            <router-link class="nav-link" to="/">课程介绍</router-link>
          </li>
          <li :class="classNonActive" ref="contents">
            <router-link class="nav-link" to="/">课程内容</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/">课程实践展示</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="#">教学团队</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/">行业信息</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/">联系我们</router-link>
          </li>
          <li class="nav-item dropdown" id="studentInt">
            <a class="nav-link dropdown-toggle" href="#" id="StudentDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              学生入口
            </a>
            <div class="dropdown-menu" aria-labelledby="StudentDropdownMenuLink">
              <router-link class="dropdown-item" to="/student/login">学生登录</router-link>
              <router-link class="dropdown-item" to="/student/home">学生注册</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="TeacherDropDownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              教师入口
            </a>
            <div class="dropdown-menu" aria-labelledby="TeacherDropDownMenuLink">
              <router-link class="dropdown-item" to="/">教师登录</router-link>
              <router-link class="dropdown-item" to="/">教师注册</router-link>
            </div>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/">成绩管理</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/messageBoard">留言板</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="">网上测试</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="">下载区</router-link>
          </li>
        </ul>
      </div>
    </nav>
      <router-view></router-view>
      <footer class="container">
          <p class="float-right"><a href="#">回到顶部</a></p>
          <p>&copy; 2020-2020 Yucheng HU &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
// import HelloWorld from './components/HelloWorld.vue'
//
  export default {
    name: 'App',
    data: function () {
      return {
          classActive: 'nav-item active',
          classNonActive: 'nav-item'
      }
    },
    methods: {
      // toActive(e) {
      //   this.$refs..class
      // }
    },
    components: {

    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

</style>
