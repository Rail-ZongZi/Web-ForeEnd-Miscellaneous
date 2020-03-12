<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/get">Get请求</router-link>|
      <router-link to="/post">Post提交</router-link>|
      <router-link to="/put">Put所有更新</router-link>|
      <router-link to="/patch">Patch提交更新</router-link>|
      <router-link to="/delete">Delete删除</router-link>|
      <router-link to="/all">并发请求</router-link> |
      <router-link to='/create'>axios创建实例</router-link> |
      <router-link to='/instance'>拦截器</router-link>
    </div>
    <transition name="transitionRouter">
      <router-view />
    </transition>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: #fff;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 2px 10px;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 4px solid #7b68ee;
    }
  }
}
.transitionRouter-enter-active,
.transitionRouter-leave-active {
    transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
    transform: translate3d(0, 100%, 0);
}
</style>
