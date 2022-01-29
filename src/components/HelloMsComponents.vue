<template>
  <div class="hello_components">
    <input type="text" class="ms_input" placeholder="添加任务">
    <div class="hello_text">确定</div>
  </div>
</template>

<script>

export default {
  setup() {

  }
}
</script>

<style scoped>
  .hello_components{
    display: flex;
    height: 40px;
    margin:0 40%;
  }
  .hello_text{
    width:70px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    border:1px solid rgb(139, 112, 112);
    border-radius: 0 5px 5px 0;
    border-left-color: transparent;
    background: rgb(226, 217, 217);
  }
  .ms_input{
    width: 100%;
    height: 40px;
    border:1px solid rgb(167,160,160);
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 3px;
    font-size:18px;
    padding:0 10px;
  }

  .ms_input:focus{
    outline:none;
    border-color: #fff;
    animation: inputBorderColor 500ms linear forwards;
  }

  @keyframes inputBorderColor {
    0%{
      border-color:rgb(167,160,160);
    }
    100%{
      border-color:rgb(139, 112, 112)
    }
  }
</style>