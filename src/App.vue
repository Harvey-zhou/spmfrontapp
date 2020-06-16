<template>
<!--  <div>-->
<!--    <Header v-show="!(path==='StudentInterface' && path === 'TeacherInterface')"/>-->
<!--    <StudentHeader v-show="(path === 'StudentInterface')"/>-->
<!--    <TeacherHeader v-show="(path === 'TeacherInterface')"/>-->
<!--  </div>-->
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="../src/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      <a class="navbar-brand" href="">SPM</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li :class="classNonActive" ref="introduction">
            <router-link class="nav-link" to="/courseIntroduction">课程介绍</router-link>
          </li>
          <li :class="classNonActive" ref="contents">
            <router-link class="nav-link" to="/courseContent">课程内容</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/practiceDisplay">课程实践展示</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/teacherTeam">教学团队</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/industryInfo">行业信息</router-link>
          </li>
          <li :class="classNonActive">
            <router-link class="nav-link" to="/contactUs">联系我们</router-link>
          </li>
          <li class="nav-item dropdown" id="studentInt" v-show="userType===null">
            <a class="nav-link dropdown-toggle" href="#" id="StudentDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              学生入口
            </a>
            <div class="dropdown-menu" aria-labelledby="StudentDropdownMenuLink" >
              <router-link class="dropdown-item" to="/student/login">学生登录</router-link>
              <router-link class="dropdown-item" to="/student/signin">学生注册</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" v-show="userType===null">
            <a class="nav-link dropdown-toggle" href="#" id="TeacherDropDownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              教师入口
            </a>
            <div class="dropdown-menu" aria-labelledby="TeacherDropDownMenuLink" v-show="userType===null">
              <router-link class="dropdown-item" to="/teacher/login">教师登录</router-link>
              <router-link class="dropdown-item" to="/teacher/signin">教师注册</router-link>
            </div>
          </li>
          <li :class="classNonActive" v-show="userType==='teacher'">
            <router-link class="nav-link" to="/gradeManagement">成绩管理</router-link>
          </li>
          <li :class="classNonActive" v-show="userType==='teacher' || userType==='student'">
            <router-link class="nav-link" to="/messageBoard">留言板</router-link>
          </li>
          <li :class="classNonActive" v-show="userType==='student'">
            <router-link class="nav-link" to="/exam">网上测试</router-link>
          </li>
          <li :class="classNonActive" v-show="userType==='student'">
            <router-link class="nav-link" to="/download">下载区</router-link>
          </li>
          <li :class="classNonActive" v-show="userType==='teacher'">
            <router-link class="nav-link" to="/upload">上传区</router-link>
          </li>
          <li class="logout" v-show="userType==='student' || userType==='teacher'">
            <button class="btn" v-on:click="logout()">注销</button>
          </li>
        </ul>
      </div>
    </nav>
      <router-view></router-view>
      <footer class="container">
          <p class="float-right"><a href="#">回到顶部</a></p>
          <p>&copy; 2020-2020 Software Management Group &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'

  export default {
    name: 'App',
    data: function () {
      return {
        userType : localStorage.getItem('userType'),
        classActive: 'nav-item active',
        classNonActive: 'nav-item',
      }
    },
    methods: {
      logout(){
        localStorage.removeItem('userType');
        localStorage.removeItem('sid');
        alert("已注销，再见！");
        this.$router.push({path: '/introduction'})
      }
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
  }

  .logout{
    position: relative;
    left: 50px;
  }

  .btn{
    border: 1px solid #f7f6f5;
    font-size: 15px;
    background-color: #f7f6f5;
    font-weight: bold;
  }
</style>
