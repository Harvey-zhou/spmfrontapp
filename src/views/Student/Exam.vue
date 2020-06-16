<template>
    <div>
        <h1 class="title">欢迎来到课后测试</h1>
        <div class="row test-unit">
            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第一单元测试</h5>
                    <p class="card-text">软件项目管理概述</p>
                    <router-link class="btn btn-primary" to="/exam/unit1">开始测试</router-link>
                </div>
            </div>

            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第二单元测试</h5>
                    <p class="card-text">项目初始-项目确立</p>
                    <router-link class="btn btn-primary" to="/exam/unit2">开始测试</router-link>
                </div>
            </div>

            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第三单元测试</h5>
                    <p class="card-text">项目初始-生存期</p>
                    <a href="#" class="btn btn-primary">开始测试</a>
                </div>
            </div>
        </div>

        <div class="row test-unit">
            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第四单元测试</h5>
                    <p class="card-text">软件需求</p>
                    <a href="#" class="btn btn-primary">开始测试</a>
                </div>
            </div>

            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第五单元测试</h5>
                    <p class="card-text">任务分解</p>
                    <a href="#" class="btn btn-primary">开始测试</a>
                </div>
            </div>

            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第六单元测试</h5>
                    <p class="card-text">成本计划</p>
                    <a href="" class="btn btn-primary">开始测试</a>
                </div>
            </div>
        </div>
        <div class="row test-unit">
            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第七单元测试</h5>
                    <p class="card-text">进度计划</p>
                    <a href="#" class="btn btn-primary">开始测试</a>
                </div>
            </div>

            <div class="card m-auto " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第八单元测试</h5>
                    <p class="card-text">质量计划</p>
                    <a href="#" class="btn btn-primary">开始测试</a>
                </div>
            </div>

            <div class="card m-auto" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">第九单元测试</h5>
                    <p class="card-text">配置管理计划</p>
                    <a href="" class="btn btn-primary">开始测试</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exam",
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

    .row{
        margin: 10px;
    }

    h5{
        font-weight: bold;
    }

</style>