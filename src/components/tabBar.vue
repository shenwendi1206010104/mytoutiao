<template>
  <div class="tab_bar">
    <div class="tab-bar">
      <div class="item" @click="changeTab(0)">
        <router-link to='/' tag="span" :class="tabIndex==0?'active':''">首页</router-link>
      </div>
      <div class="item" @click="changeTab(1)">
        <router-link to='/follow' tag="span" :class="tabIndex==1?'active':''">问答</router-link>
      </div>
      <div class="item" @click="changeTab(2)">
        <router-link to='/index' tag="span" :class="tabIndex==2?'active':''">视频</router-link>
      </div>
      <div class="item" @click="changeTab(3)">
        <router-link to='/index' tag="span" :class="tabIndex==3?'active':''">我的</router-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  components: {},
  props: {},
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.tab-bar{
  height:50px;
  width:100%;
  line-height:50px;
  background:#000;
  color:#fff;
  bottom:0;
  left:0;
  font-size:16px;
  position: fixed;
  display:flex;
  justify-items: center;
  z-index: 999;

}
.tab-bar .item{
  flex: 1;
  text-align: center;
}
.active{
  color: pink;
}
</style>
