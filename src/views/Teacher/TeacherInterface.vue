<template>
  <div>
    <h1 class="title">欢迎老师登录！</h1>
    <ul class="courseList">您所教的课程：
      <li class="course">软件项目管理<img class="image" src="../../assets/CourseIntroduction.jpg">
        <input class="btn" type="button" value="管理课程" v-on:click="manageCourse"/>
      </li>
    </ul>
    <ul class="operations">
      <li class="operation">查看学生留言板的留言
        <input class="message-btn" type="button" value="留言板" v-on:click="enterMessageBoard"/>
      </li>
      <li class="operation">管理学生成绩
        <input class="grade-btn" type="button" value="成绩管理" v-on:click="manageGrade"/>
      </li>
      <li class="operation">上传课程课件
        <input class="upload-btn" type="button" value="上传区" v-on:click="upload"/>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TeacherInterface",
        data: function () {
          return {
          }
        },
      methods:{
        manageCourse(){

        },

        enterMessageBoard(){
          this.$router.push({path: '/messageBoard'});
        },
        upload(){
          this.$router.push({path: '/upload'});
        },
        manageGrade(){
          this.$router.push({path: '/gradeManagement'});
        }
      }
    }
</script>

<style scoped>
  .title{
    font-weight: bold;
    padding: 30px;
  }

  .courseList{
    text-align: left;
    list-style-type: none;
    width: 100%;
    line-height: 30px;
    font-size: larger;
    font-weight: bold;
  }

  .course{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px #fff;
    border-radius: 6px;
    margin: 15px;
    width: 50%;
  }

  .btn{
    background-color: #325eff;
    border: 0;
    color: #fff;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    outline: 0;
    font-weight: bold;
    font-size: 15px;
    position: relative;
    left: 100px;
  }

  .image{
    width: 200px;
    height: 150px;
  }

  .operations{
    text-align: left;
    list-style-type: none;
    width: 100%;
    line-height: 30px;
    font-size: larger;
    font-weight: bold;
  }

  .operation{
    border: 1px #fff;
    margin: 15px;
  }

  .message-btn {
    background-color: #325eff;
    border: 0;
    color: #fff;
    padding: 6px 15px;
    border-radius: 6px;
    cursor: pointer;
    outline: 0;
    font-weight: bold;
    font-size: 15px;
    position: relative;
    left: 30px;
  }

  .grade-btn{
    background-color: #325eff;
    border: 0;
    color: #fff;
    padding: 6px 15px;
    border-radius: 6px;
    cursor: pointer;
    outline: 0;
    font-weight: bold;
    font-size: 15px;
    position: relative;
    left: 100px;
  }

  .upload-btn{
    background-color: #325eff;
    border: 0;
    color: #fff;
    padding: 6px 15px;
    border-radius: 6px;
    cursor: pointer;
    outline: 0;
    font-weight: bold;
    font-size: 15px;
    position: relative;
    left: 100px;
  }

</style>