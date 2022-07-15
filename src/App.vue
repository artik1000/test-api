<template>
  <nav class="main__nav">
    <router-link to="/">Users</router-link>
    <router-link to="/adduser">AddUser</router-link>
    <router-link to="/userpage">User Page</router-link>
  </nav>
  <router-view/>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100vw
@mixin center
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  margin: auto

.main__nav
  padding: 24px
  display: flex
  gap: 16px
  a
    font-weight: bold
    color: #2c3e50
    text-decoration: none
    &.router-link-exact-active
      color: blue

.page__description
  color: blue
  margin: 0
</style>
