<template>
    <div id="login">
        <img class="pictures" src="../../assets/student.gif" alt="Cannot load image"/>
        <h1>学生登录</h1>
        <form>
            <div class="row">
                <div class="col-6 col-md-4 m-auto">
                    <div class="form-group text-left">
                        <label for="username">学号</label>
                        <input type="text" class="form-control" id="username" v-model="user.username" placeholder="学号">
                        <small id="emailHelp" class="form-text text-muted">我们永远不会把您的信息泄露给任何人。</small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 m-auto" >
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
        name: "Login",
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
                    alert("请输入正确的学号");
                    location.reload();
                }
                const that = this;
                this.axios.post('/api/student/login', {
                    "sid": this.user.username,
                    "sname": null,
                    "gender": null,
                    "grade": null,
                    "hashedPassword": this.user.password
                }).then(function (response) {
                    const uname = parseInt(that.user.username);
                    localStorage.setItem('userType', 'student');
                    localStorage.setItem('sid', JSON.stringify(uname));
                    that.$router.push({path: "/studentInterface"});
                    console.log(response);
                }).catch(function (error) {
                    console.log("Here's the error message:");
                    console.log(error);
                });
            }
        },
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