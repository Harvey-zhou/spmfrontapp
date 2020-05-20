<template>
    <div class="input-con">
      <span class="input-group-text">留言内容</span>
      <!--ref 被用来给元素或子组件注册引用信息。
      引用信息将会注册在父组件的 $refs 对象上。
      如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
      如果用在子组件上，引用就指向组件实例：  -->
      <textarea
        type="text"
        v-model="message"
        placeholder="请输入留言内容"/>
    </div>
</template>

<script>
    export default {
      data() {
        return{
          message: ''
        }
      },
      methods: {
        handleInput(){
          if (this.message === '')
            window.alert("不能发布空留言")
        },
        focus: function () {
          this.$refs.message.focus()
        }
      },
        name: "messageTextarea"
    }
</script>

<style scoped>
  .input-con{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  span{
    width: 100px;
    display: inline-block;
    text-align: right;
    vertical-align: top;
  }
  textarea{
    border: 1px solid #e6e6ee;
    padding: 4px 5px;
    line-height: 24px;
    border-radius: 5px;
    width: 300px;
    height: 100px;
  }
</style>
