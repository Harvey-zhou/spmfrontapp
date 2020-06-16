<template>
    <div>
        <h1 class="title">课程实践展示</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <p class="text-left lead">
                        招投标书模拟实践展示
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/PracticeShow1.png" class="img-thumbnail">
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <p class="text-left lead">
                        成本估算模式实践展示
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/PracticeShow2.png" class="img-thumbnail">
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <p class="text-left lead">
                        项目范围计划
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/WBS.jpg" class="img-thumbnail">
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <p class="text-left lead">
                        中期Demo演示
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/DemoShow.png" class="img-thumbnail">
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PracticeDisplay"
    }
</script>

<style scoped>
    .title{
        padding: 30px;
        text-align: left;
        font-family: sans-serif;
        font-weight: bold;
        height: 100px;
        width: 400px;
    }

 .lead{
     font-weight: bold;
     padding:50px
 }
</style>