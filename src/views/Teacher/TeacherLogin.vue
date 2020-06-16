<template>
    <div id="login">
        <img class="pictures" src="../../assets/teacher.png" alt="Cannot load image"/>
        <h1>教师登录</h1>
        <form>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div class="form-group text-left">
                        <label for="username">工号</label>
                        <input type="text" class="form-control" id="username" v-model="user.username" placeholder="工号">
                        <small id="emailHelp" class="form-text text-muted">我们永远不会把您的信息泄露给任何人。</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div class="form-group text-left">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="password" v-model="user.password" placeholder="密码">
                    </div>
                </div>
            </div>

            <button class="btn btn-primary" v-on:click="login">登录</button>
            <button class="btn btn-secondary" v-on:click="clear">清空</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "TeacherLogin",
        data: function () {
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            clear: function() {
                this.user.username = '';
                this.user.password = ''
            },

            login: function () {
                const numReg = /^[0-9]*$/;
                const numRe = new RegExp(numReg);
                if (!numRe.test(this.user.username)) {
                    alert("请输入正确的工号");
                    location.reload();
                }
                const that = this;
                this.axios.post('/api/teacher/login', {
                    "tid": this.user.username,
                    "tname": null,
                    "hashedPassword": this.user.password
                }).then(function (response) {
                    localStorage.setItem('userType', 'teacher');
                    that.$router.push({path : '/teacherInterface'});
                    console.log(response);
                }).catch(function (error) {
                    console.log("Here's the error message:");
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    label {
        width: 80px;
        display: inline-block;
    }

    button {
        margin-right: 10px;
    }

    .pictures {
        width: 200px;
        height: 150px;
        margin-bottom: 20px;
        border-radius: 5px;
    }
</style>