<template>
    <div id="app">
        <div id="HomePageCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#HomePageCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#HomePageCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/preface2.png" class="d-block w-100" alt="...">
                    <!--                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>-->
                    <div class="container">
                        <div class="carousel-caption text-left">
                            <h1>南京师范大学计算机科学与技术学院</h1>
                            <p>南京师范大学1984年创办计算机专业。1994年6月，以数学系的计算机（师范）专业为基础单独建立计算机科学系。1999年5月计算机科学系与数学系合并成立数学与计算机科学学院，2009年4月成立南京师范大学计算机科学与技术学院。
                                目前学院下设计算机科学与技术系、软件工程系、网络与信息安全系、人工智能系、计算中心、计算机专业实验教学中心、江苏省信息安全保密技术工程研究中心、江苏省智能信息技术与软件工程重点实验室。</p>
                            <p><a class="btn btn-lg btn-primary" href="http://computer.njnu.edu.cn" role="button">了解更多</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/spm.jpg" class="d-block w-100" alt="...">
<!--                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>-->
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>软件项目管理课程</h1>
                            <p>软件项目管理的对象是软件工程项目。它所涉及的范围覆盖了整个软件工程过程。 为使软件项目开发获得成功，关键问题是必须对软件项目的工作范围、可能风险、需要资源（人、硬件/软件）、要实现的任务、经历的里程碑、花费工作量（成本）、进度安排等做到心中有数。</p>
                            <p><a class="btn btn-lg btn-primary" href="https://baike.baidu.com/item/软件项目管理/9854387?fr=aladdin" role="button">了解更多</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#HomePageCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#HomePageCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="container marketing">
            <!-- Three columns of text below the carousel -->
            <div class="row">
                <div class="col-lg-4">
                    <br>
<!--                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>-->
                    <h2>课程内容</h2>
                    <p>《软件项目管理》是软件工程专业的专业课程，以培养软件项目管理能力为目的，本课程以路线图的形式讲述了软件项目管理的理论、方法以及技巧，包括项目初始、项目计划、项目执行控制、项目结束。</p>
                    <p><a class="btn btn-secondary" href="../views/CourseContent.vue" role="button">查看更多 &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <br>
<!--                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>-->
                    <h2>课程实践展示</h2>
                    <p>本课程将CDIO工程教育模式引入到课堂教学中来，以实现“做中学”和“基于项目的学习”。
                        通过贯穿始终的项目案例和情景项目展示，同时通过一个Web项目实践,完成了基于敏捷模型的项目开发和管理过程. 让学生切身体会软件项目管理过程，从而更好地将软件项目管理理论与实践相结合。</p>
                    <p><a class="btn btn-secondary" href="../views/PracticeDisplay.vue" role="button">查看更多 &raquo;</a></p>
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <br>
<!--                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>-->
                    <h2>教学团队</h2>
                    <p>学院现有教职工90人，其中教授14人（含博士生导师6人），副教授及博士45人，硕士生导师32人，拥有教育部计算机课程教学指导委员会委员1人、教育部教学评估专家1人、入选江苏省“青蓝工程”中青年学术带头人和中青年骨干教师各1人、
                        江苏省“333工程”培养人选1人，江苏省“六大高峰人才”1人，ESI高被引学者1人，南京师范大学“奕熙精英教师奖”获得者1人、校级教学名师1人，学校青年“教师教学”十佳2人。</p>
                    <p><a class="btn btn-secondary" href="../views/TeacherTeam.vue" role="button">查看更多 &raquo;</a></p>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduction",
        methods:  {
        }
    }
</script>

<style scoped>

</style>