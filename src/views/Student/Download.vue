<template>
    <div>
        <h1 class="title">下载区</h1>
        <div>
            <table class="table-bordered table">
                <tr>
                    <th>文件名</th>
                    <th>上传时间</th>
                    <th @click="listFile()">点击下载</th>
                </tr>
                <tr v-for="item in filelist" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>{{item.createTime}}</td>
                    <td><input type="button" class='btn' @click="down(item.name)" value="下载"/></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Download",
        data: function () {
            return{
                filelist:[]
            }
        },
        created() {
            this.listFile();
        },
        methods:{
            listFile(){
                let that = this;
                $.post('http://localhost:8081/api/file/listFile',{},function(obj){
                    that.filelist = obj;
                },'json');
            },
            down(name){
                let a = document.createElement('a')
                a.href ="http://localhost:8081/api/file/getFile/"+name;
                a.click()
            }
        },
        watch: {
            $route() {
                this.listFile();
            }
        }
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

    .table{
        position: relative;
        left: 20%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 900px;
        table-layout: fixed;
    }

    .btn{
        font-size: small;
        background-color: #325eff;
        border: 0;
        color: #fff;
        border-radius: 6px;
    }
</style>