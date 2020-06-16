<template>
    <div>
        <h1 class="title">联系方式</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-10 contact">
                    <ul style="list-style: none">
                        <li>
                            <p class="text-left lead">
                                欢迎与我们联系：
                            </p>
                        </li>
                        <li>
                            <p class="text-left lead">
                                Email:spmxxxxxxx@gmail.com
                            </p>
                        </li>
                        <li>
                            <p class="text-left lead">
                                Tel:400-8586666
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="../assets/contact.jpg" class="img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs"
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

    .contact{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: 0;
        padding: 20px 20px 20px;
        margin: 10px;
    }

    .img{
        width: 150px;
        height: 150px;
        position: absolute;
        left: 30px;
        top: 180px
    }
</style>