<template>
  <div>
    <h1 class="title">欢迎登录学习网站</h1>
    <ul class="courseList">你参加的课程：
      <li class="course">软件项目管理<img class="image" src="../../assets/CourseIntroduction.jpg">
        <input class="btn" type="button" value="开始学习" v-on:click="startStudy"/>
      </li>
    </ul>
    <ul class="operations">或者：
      <li class="operation">到留言板与老师同学们畅所欲言！
        <input class="message-btn" type="button" value="留言板" v-on:click="enterMessageBoard"/>
      </li>
      <li class="operation">测试已经学过的知识!
        <input class="exam-btn" type="button" value="开始测试" v-on:click="startExam"/>
      </li>
      <li class="operation">下载课程课件！
        <input class="download-btn" type="button" value="下载区" v-on:click="download"/>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "StudentInterface",
      data: function () {
          return {
          }
      },
      methods:{
        startStudy(){
          this.$router.push({path: '/courseContent'});
        },
        enterMessageBoard(){
          this.$router.push({path: '/messageBoard'});
        },
        startExam(){
          this.$router.push({path: '/exam'});
        },
        download(){
          this.$router.push({path: '/download'});
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

  .message-btn{
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

  .exam-btn{
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
    left: 130px;
  }

  .download-btn{
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
    left: 180px;
  }
</style>