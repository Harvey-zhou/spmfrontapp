<template>
    <div>
        <h1 class="title">教学团队</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4 team">
                    <p class="text-left lead">
                        学院现有教职工90人，其中教授14人（含博士生导师6人），
                        副教授及博士45人，硕士生导师32人.
                        拥有教育部计算机课程教学指导委员会委员1人、
                        教育部教学评估专家1人、入选江苏省“青蓝工程”
                        中青年学术带头人和中青年骨干教师各1人、
                        江苏省“333工程”培养人选1人，江苏省“六大高峰人才”1人，
                        ESI高被引学者1人，南京师范大学“奕熙精英教师奖”获得者1人、
                        校级教学名师1人，学校青年“教师教学”十佳二人。
                    </p>
                </div>
                <img src="../assets/TeacherTeam.png" class="img">
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "TeacherTeam"
    }
</script>

<style scoped>
    .title{
        padding: 30px;
        text-align: left;
        font-family: sans-serif;
        font-weight: bold;
        height: 100px;
        width: 250px;
    }

    .team{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
    }

    .img{
        width: 500px;
        height: 400px;
        position: absolute;
        top: 180px;
        right:300px;
    }
</style>