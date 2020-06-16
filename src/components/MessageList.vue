<template>
    <div class="list-container">
        <section>
            <ul class="message" v-if="getList.length>0">
                <li class="li" v-for="item in list" :key="item.id">
                    <div class="username col-lg-2"><img class="img" src="../assets/photo.jpg" width="50" height="50"/>
                        {{item.username || ''}}
                    </div>
                    <div class="newMsg col-lg-11">
                        {{ item.newMsg || '' }}
                    </div>
                    <button class="list-btn" @click="handleDel(item)">删除</button>
                    <br>
                </li>
            </ul>
            <ul v-else style="list-style-type: none">
                <li style="font-size: xx-large; font-weight: bold">暂时无留言！</li>
                <br>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        computed: {
            getList() {
                return this.list
            }
        },
        //initialization
        created() {
            this.loadMessage()
        },
        methods: {
            loadMessage() {
                this.list = JSON.parse(localStorage.getItem('leaveMessage') || '[]')
            },
            handleDel(item) {
                let msgList = JSON.parse(localStorage.getItem('leaveMessage') || '[]')
                this.list = msgList
                let index = msgList.findIndex(e => e.id === item.id)
                msgList.splice(index, 1)
                localStorage.setItem('leaveMessage', JSON.stringify(msgList))
                this.loadMessage()
            }
        },
        name: "MessageList"
    }
</script>

<style scoped>
    .li{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px #fff;
        border-radius: 6px;
        margin: 15px;
    }

    .message{
        text-align: left;
        list-style-type: none;
        width: 100%;
        line-height: 30px;
    }

    .list-container {
        margin: 10px;

    }
    .list-btn {
        background-color: #325eff;
        border: 0;
        color: #fff;
        padding: 5px 10px;
        border-radius: 6px;
        cursor: pointer;
        outline: 0;
        font-weight: 500;
        font-size: 12px;
        float: right;
        position: relative;
        right: 10px;
        bottom: 20px;
    }

    .username{
        border-radius: 6px;
    }

    .newMsg{
        position: relative;
        left: 10px;
        top: 20px;
        background-color: #f7f6f5;
        border-radius: 6px;
    }

</style>