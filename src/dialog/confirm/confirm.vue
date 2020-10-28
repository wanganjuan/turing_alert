<template>
  <div class="mask-black-dialog"  @click.stop="closeConfirm(false)">
    <div class="mask-content">
      <div class="mask-header">
        <span v-html="content"></span>
      </div>
      <div class="mask-foot">
        <el-button @click.stop="closeConfirm(false)" class="mask-foot-button" >取 消</el-button>
        <el-button type="primary"  @click.stop="closeConfirm(false, callback)"  class="mask-foot-button" :class="{'important-button': isDel}">{{buttonDesc || '确 定'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    buttonDesc: String,
    callback: Function,
    isDel: Boolean
  }
}
</script>

<style lang="stylus" scoped>
  .mask-black-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background:rgba(36,47,62,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    .mask-content {
      width:360px;
      min-height:140px;
      background:rgba(255,255,255,1);
      padding-top: 34px;
      padding-bottom: 36px;
      box-sizing border-box
      box-shadow:0px 2px 12px 0px rgba(0,0,0,0.06);
      border-radius:4px;
      border:1px solid rgba(228,231,237,1);
      .mask-header {
        min-height: 20px;
        text-align center
        line-height:20px
      }
    }
    .mask-foot {
      text-align: center;
      margin-top: 16px;
      .mask-foot-button {
        width 88px
      }
      .important-button {
        background-color $error
        border-color $error
        &:hover {
          background-color #f45d65
          border-color #f45d65
        }
      }
    }
  }
</style>
