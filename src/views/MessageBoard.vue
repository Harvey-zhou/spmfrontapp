<template>
  <div>
    <div>
      <h1 class="message">留言板</h1>
<!--     <input v-model="username"/>-->
<!--      <message-input ref="message_input"/>-->
<!--      <v-textarea v-model="message" ref="message"/>-->
      <br>
      <message-textarea ref="message_textarea"/>
      <br>
      <button @click="handleClick" class="btn">发布</button>
    </div>
    <message-list ref="message_list"/>
  </div>
</template>

<script>
    // import messageInput from '../components/messageInput.vue'
    import messageTextarea from '../components/messageTextarea.vue'
    import messageList from '../components/messageList.vue'
    export default {
      data(){
        return{
          list:[]
        }
      },
      components:{
        messageTextarea,
        messageList
      },
      methods:{
        handleClick(){
          // this.$refs.message_input.handleInput();
          this.$refs.message_textarea.handleInput();
          this.$refs.message_list.listPush();
        }
      //     this.list.push({
      //       name: this.username,
      //       message: this.message
      //     });
      //     this.message='';
      //   },
      //   handleReply:function (index) {
      //     const name = this.list[index].name;
      //     this.message='回复@'+ name +':';
      //     this.$refs.message.focus();
         },
      name: "MessageBoard"
    }
</script>

<style scoped>
  .message{
    display: flex;
    flex-direction: column;
  }
  .message div{
    margin-bottom: 12px;
    flex-direction: row;
  }
  .message input:focus,
  .message textarea:focus{
    border:1px solid #3399ff;
    border-radius: 5px;
  }
  .btn-con{
    text-align:center;
    display: inline-block;
  }
  .btn{
    padding: 6px 15px;
    border: 1px solid #39f;
    border-radius: 4px;
    color: #fff;
    background-color: #39f;
    cursor: pointer;
    outline: none;
  }
</style>
