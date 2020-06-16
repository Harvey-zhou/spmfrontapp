<template>
    <div id="signin">
        <img class="pictures" src="../../assets/Signin.jpg" alt="Cannot load image"/>
        <h1>学生注册</h1>
        <form>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div class="form-group text-left">
                        <label for="username">学号</label>
                        <input type="text" class="form-control" id="username" v-model="user.username" placeholder="请输入你的学号">
                        <small id="emailHelp" class="form-text text-muted">我们永远不会把您的信息泄露给任何人。</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div class="form-group text-left">
                        <label for="username">姓名</label>
                        <input type="text" class="form-control" id="sname" v-model="user.sname" placeholder="请输入你的真实姓名">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 m-auto" >
                    <div class="form-group text-left">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="password" v-model="user.password" placeholder="请输入你的密码">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div>
                        <input type="radio" value="1" id="male" v-model="user.gender" ><label>男</label>
                        <input type="radio" value="2" id="female" v-model="user.gender" ><label>女</label>
                    </div>
                </div>
            </div>

            <button class="btn btn-primary" v-on:click="signin">注册</button>
            <button class="btn btn-secondary" v-on:click="clear">清空</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "StudentSignin",
        data: function () {
            return {
               user: {
                   username: '',
                   sname: '',
                   gender: '1',
                   password: ''
               }
            }
        },
        methods: {
            clear(){
                this.user.username = '';
                this.user.sname = '';
                this.user.password = ''
            },
            signin: function () {
                const numReg = /^[0-9]*$/;
                const numRe = new RegExp(numReg);
                if (!numRe.test(this.user.username)) {
                    alert("请输入正确的学号");
                    location.reload();
                }
                const that = this;
                this.axios.post('/api/student/insert', {
                    "sid": parseInt(this.user.username),
                    "sname": this.user.sname,
                    "gender": parseInt(this.user.gender),
                    "grade": null,
                    "hashedPassword": this.user.password
                }).then(function (response) {
                    alert("注册成功！");
                    that.$router.push({path: "/student/login"});
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