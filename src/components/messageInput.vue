<template>
  <div class="input-con">
    <div class="input-group-prepend" >
      <span class="input-group-text">昵称：</span>
    </div>
    <label>
      <input type="text" class="input-con" v-model="username" placeholder="请输入昵称"/>
    </label>
  </div>

</template>

<script>
    export default {
      data() {
        return {
          username: ''
        }
      },
      methods: {
        handleInput() {
          if (this.username === '') {
            window.alert('请输入昵称')
          }
        }
      },
      name: "messageInput"
    }
</script>

<style scoped>
  .input-con{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
  }
  span{
    width: 100px;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
  input{
    border: 1px solid #e6e6ee;
    padding: 4px 5px;
    inline-height: 24px;
    height: 24px;
    border-radius: 5px;
    width: 300px;
  }
</style>
