<template>
    <div id="unit1" class="">
            <h1 class="title">软件项目管理第一单元</h1>
        <br>
        <div class="text-left problem-set">
            <h2>一、选择题</h2><br>
        </div>

        <div class="problem-set text-sm-left">
            <h4>1.以下哪一项最能表现一个项目的特征</h4>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" v-model="answers.problem1" id="1a" value="a">
                <label class="form-check-label" for="1a">A:运用进度计划技巧</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" v-model="answers.problem1" id="1b" value="b">
                <label class="form-check-label" for="1b">B:整合范围与成本</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" v-model="answers.problem1" id="1c" value="c" >
                <label class="form-check-label" for="1c">C:确定期限</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" v-model="answers.problem1" id="1d" value="d" >
                <label class="form-check-label" for="1d">D:利用网络进行跟踪</label>
            </div><br>
        </div>

        <div class="problem-set text-sm-left"><h4>2.以下哪一项最能表现一个项目的特征</h4>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" v-model="answers.problem2" id="2a" value="a">
                <label class="form-check-label" for="2a">A:运用进度计划技巧</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" v-model="answers.problem2" id="2b" value="b">
                <label class="form-check-label" for="2b">B:整合范围与成本</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" v-model="answers.problem2" id="2c" value="c" >
                <label class="form-check-label" for="2c">C:确定期限</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" v-model="answers.problem2" id="2d" value="d" >
                <label class="form-check-label" for="2d">D:利用网络进行跟踪</label>
            </div><br>
        </div>

        <div class="problem-set text-sm-left">
            <h4>3.以下哪一项最能表现一个项目的特征</h4>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" v-model="answers.problem3" id="3a" value="a">
                <label class="form-check-label" for="3a">A:运用进度计划技巧</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" v-model="answers.problem3" id="3b" value="b">
                <label class="form-check-label" for="3b">B:整合范围与成本</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" v-model="answers.problem3" id="3c" value="c" >
                <label class="form-check-label" for="3c">C:确定期限</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" v-model="answers.problem3" id="3d" value="d" >
                <label class="form-check-label" for="3d">D:利用网络进行跟踪</label>
            </div><br>
        </div>

        <div class="problem-set text-sm-left">
            <h4>4.以下哪一项最能表现一个项目的特征</h4>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" v-model="answers.problem4" id="4a" value="a">
                <label class="form-check-label" for="4a">A:运用进度计划技巧</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" v-model="answers.problem4" id="4b" value="b">
                <label class="form-check-label" for="4b">B:整合范围与成本</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" v-model="answers.problem4" id="4c" value="c" >
                <label class="form-check-label" for="4c">C:确定期限</label>
            </div><br>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" v-model="answers.problem4" id="4d" value="d" >
                <label class="form-check-label" for="4d">D:利用网络进行跟踪</label>
            </div><br>
        </div>


<!--        提交-->
        <button type="button" class="btn btn-success problem-set" v-on:click="check">提交答案
<!--            <div v-show="panelShow">-->
<!--                <el-dialog title="专题编辑" :visible.sync="isShow" :before-close="hidePanel">-->
<!--                    <el-button @click="hidePanel">关闭弹窗</el-button>-->
<!--                </el-dialog>-->
<!--            </div>-->
        </button>
    </div>
</template>

<script>
    export default {
        name: "unit1",

        data: () => {
             return {
                 answers: {
                     problem1: null,
                     problem2: null,
                     problem3: null,
                     problem4: null,
                 },
                 grade: 0
             }
        },

        methods: {
            check: function () {
                let correct = 0;
                if (this.answers.problem1 === "a") {
                    correct += 25;
                }
                if (this.answers.problem2 === "a") {
                    correct += 25;
                }
                if (this.answers.problem3 === "a") {
                    correct += 25;
                }
                if (this.answers.problem4 === "a") {
                    correct += 25;
                }
                const that = this;
                this.axios.post('/api/unittest/updateGrade', {
                    'sid': JSON.parse(localStorage.getItem('sid')),
                    'unit1': correct,
                }).then(function (response) {
                    alert("你的unit1得分：" + correct);
                    that.$router.push({path: '/exam'});
                    console.log(response);
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>
    .title{
        padding: 30px;
        text-align: left;
        font-family: sans-serif;
        font-weight: bold;
        height: 100px;
        width: 500px;
    }

    .problem-set {
        margin: 50px;
    }
</style>
