<template>
    <div id="gradeDisplay">
        <!--<ul>
            <li v-for="item in list" v-bind:key="item.sid">
                <p>学号：{{item.sid}}</p>
                <p>姓名：{{item.sname}}</p>
                <p>成绩：{{item.grade}}</p>
            </li>
           &lt;!&ndash; <p v-for="item in list" v-bind:key="item.sid">学号：{{item.sid}} 姓名：{{item.sname}} 年级: {{item.grade}}</p>&ndash;&gt;
        </ul>-->
        <div class="panel panel-primary">
            <div class="title">
                <h1>成绩管理</h1>
            </div>
            <div class="panel-body form-inline">
                <label class="label" style="font-weight: bold">添加成绩</label>
                <label class="label">
                    学号：
                    <input type="text" class="form-control" v-model="sid">
                </label>
                <label class="label">
                    成绩：
                    <input type="text" class="form-control" v-model="grade">
                </label>
                <input type="button" value="添加" class="btn btn-primary" @click="add()">
            </div>
        </div>
        <div class="grade-box">
            <table class="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>成绩</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in list"  :key="item.sid">
                    <td>{{item.sid}}</td>
                    <td>{{item.sname}}</td>
                    <td>{{item.grade}}</td>
                    <td>
                        <button class="btn" v-on:click="del(item.sid)">删除成绩</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                sid: '',
                grade: '',
                list: [{
                    sid: '',
                    sname: '',
                    grade: ''
                }
                ]
            }
        },

        created() {
            this.loadGrade();
        },

        methods: {
            loadGrade(){
                const that = this;
                this.axios.get('api/student/students').then(function (response) {
                    that.list = JSON.parse(JSON.stringify(response.data));
                }).catch(function (error) {
                    console.log(error);
                })
            },

            add() {
                this.axios.post('api/student/updateGrade', {
                    'sid': parseInt(this.sid),
                    'grade': parseInt(this.grade)
                }).then(function (response) {
                    location.reload();
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                })
            },
            del(sid) {
                this.axios.post('api/student/updateGrade', {
                    'sid': parseInt(sid),
                    'grade': null
                }).then(function (response) {
                    location.reload();
                    console.log(response);
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },
        name: "GradeManagement"
    }
</script>

<style scoped>
    .title{
        padding: 30px;
    }

    .label{
        padding: 10px;
    }

    .grade-box{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 50px 50px 35px;
        background-color: #fff;
        border-radius: 6px;
    }

    .btn{
        background-color: #325eff;
        border: 0;
        color: #fff;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        outline: 0;
        font-weight: bold;
        font-size: 15px;
    }

</style>