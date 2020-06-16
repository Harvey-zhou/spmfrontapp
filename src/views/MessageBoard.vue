<template>
  <div>
    <h1 class="title">留言板</h1>
    <section id="message-area">
      <div class="col-lg-10 offset-lg-1">
        <div class="message-box text-center">
          <div class="form-group-row">
            <div class="col-lg-4">
              <input class="form-control" type="text" v-model="username" placeholder="请输入昵称" />
            </div>
            <br>
            <div class="form-group">
              <textarea class="form-control" rows="10" type="text" v-model="newMsg" placeholder="请输入留言内容" />
            </div>
            <button @click="postMessage">发布</button>
          </div>
        </div>
      </div>
    </section>
    <div class="list">
      <message-list :msg-list="list" ref="messageList"/>
    </div>
  </div>
</template>

<script>
  import MessageList from '../components/MessageList'

  export default {
    data: function() {
      return {
        username: '',
        newMsg: '',
        list: []
      }
    },
    created() {
      this.list = JSON.parse(localStorage.getItem('leaveMessage') || '[]')
    },
    methods: {
      //use LocalStorage to save messages
      postMessage() {
        if (this.username === '' || this.newMsg === '') {
          return alert('昵称或者留言内容不能为空！')
        } else {
          //change messages into array to push
          const msg = {
            id: Date.now(),
            username: this.username,
            newMsg: this.newMsg,
          }
          let msgList = JSON.parse(localStorage.getItem('leaveMessage') || '[]')
          msgList.unshift(msg)
          localStorage.setItem('leaveMessage', JSON.stringify(msgList))
          this.username = ''
          this.newMsg = ''
          this.$refs.messageList.loadMessage()
        }
      },
    },
    components: {
      MessageList,
    },
    name: 'MessageBoard',
  }
</script>

<style scoped>
  .title{
    padding: 30px
  }

  #message-area{
    padding: 10px 0 120px
  }

  .message-box {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 35px;
    background-color: #fff;
    border-radius: 6px;
  }

  .message-box input{
    height: 50px;
    border: 1px solid #f7f6f5;
    font-size: 15px;
    background-color: #f7f6f5;
    font-weight: 500;
  }

  .message-box textarea {
    border: 1px solid #f7f6f5;
    padding-top: 10px;
    background-color: #f7f6f5;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    left: 16px;
  }

  .message-box button {
    background-color: #325eff;
    border: 0;
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
    cursor: pointer;
    outline: 0;
    font-weight: 500;
    font-size: 15px
  }

  .list {
    margin-top: 16px;
  }
</style>
