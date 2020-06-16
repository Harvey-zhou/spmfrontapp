<template>
    <div :style="bgImg">
        <h1 class="title">行业信息</h1>
        <div class="container">
            <div class="row">
                <div>
                    <img src="../assets/manager.jpg" class="img"/>
                </div>
                <div class="col-md-6 work">
                    <h4>软件开发公司中项目经理的工作</h4>
                    <ul style="list-style: none">
                        <li>1、协助导航产品经理开展项目管理，从立项到项目结束：
                            包括项目整体的组织与把控，项目范围管理，项目需求
                            管理，项目资源计划，项目日程计划制定和进度管理，
                            风险管理，测试及评价、问题管理和质量控制，配置管理，
                            交付管理/发布管理等。
                        </li>
                        <li>2、推动项目团队日常执行工作，负责进度跟踪和控制，确保
                            工作按计划完成，对结果负责；
                        </li>
                        <li>3、负责推动项目管理关键流程在项目的落实，并从项目管理的
                            观点和角度对团队内部流程进行优化和推进；
                        </li>
                        <li>4、负责定期跟踪并向客户及相关项目干系人汇报纳入跟踪的项
                            目进展,并负责跟踪项目的风险识别;
                        </li>
                        <li>负责项目管理的其他事务性工作。</li>
                    </ul>
                </div>

            </div>
            <div class="row">
                <div class="col-md-6 request" >
                    <h4>软件开发公司对项目经理的要求</h4>
                    <ul style="list-style: none">
                        <li>1、本科以上学历毕业</li>
                        <li>2、3年以上项目管理经验，熟悉项目管理知识体系</li>
                        <li>3、具有软件开发或产品全生命周期过程管理，具有一定业务知识及实战业绩</li>
                        <li>4、具有较强的沟通能力及协调能力</li>
                        <li>5、具有较强的业务学习能力，有意愿深入了解导航相关产品业务知识</li>
                        <li>6、能够承受较强的工作压力</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bgImg: {
                    backgroundImage: "url(" + require("../assets/background.png") + ")",
                    backgroundSize: "100%"
                }
            }
        },

        name: "IndustryInfo"
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

    .img{
        width: 200px;
        height: 200px;
        position: absolute;
        right: 300px;
        top: 300px
    }

    .work{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: 0;
        padding: 20px 20px 20px;
        margin: 10px;
    }

    .request{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
    }

    li{
        padding: 10px;
        text-align: left;
    }


</style>