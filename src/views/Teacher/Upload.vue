<template>
    <div>
        <h1 class="title">上传区</h1>
        <div class="form-group">
            <div class="col-sm-3 control-label">上传文件</div>
            <div class="custom-file">
                <label class="custom-file-label" for="exampleInputFile">选择文件</label>
                <input type="file" class="custom-file-input" id="exampleInputFile">

            </div>
        </div>
        <div>
            <button class="btn" @click="upload">确认上传</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Upload",
        data: function(){
            return{
            }
        },
        methods: {
            upload(){
                const formData = new FormData();
                formData.append("file",$("#exampleInputFile")[0].files[0]);

                $.ajax({
                    url:'http://localhost:8081/api/file/upload',
                    type:'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success:function(res){
                        if(res===1){
                            alert('上传成功！');
                        }
                    }
                })
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

    .control-label{
        font-weight: bold;
        position: relative;

    }

    .btn{
        background-color: #325eff;
        border: 0;
        color: #fff;
        padding: 10px 25px;
        border-radius: 6px;
        cursor: pointer;
        outline: 0;
        font-weight: bold;
        font-size: 15px
    }

    .form-group{
        position: relative;
        left: 550px;
        width: 25%;
    }
    .custom-file-label{
        font-weight: bold;
    }

    .description{
        font-size: 15px;
        font-weight: bold;
        width: 400px;
        height: 200px;
    }

</style>