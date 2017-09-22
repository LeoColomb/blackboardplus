<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="https://developer.blackboard.com/assets/images/bb_logo_subpages.png" alt="logo">
        </router-link>
        <router-link to="/tasks">Tasks</router-link>
        <router-link to="/announcements">Announcements</router-link>
        <router-link to="/grades">Grades</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <footer class="footer">
      <div class="inner">
        <a class="github" href="https://github.com/LeoColomb/blackboardplus" target="_blank" rel="noopener">
          <p>Made with ❤️by Léo Colombaro</p>
        </a>
        <br>
        <small>© 2017 <a href="https://colombaro.fr">Léo Colombaro</a> — All rights reserved.</small>
        <br>
        <small>Blackboard</small>
      </div>
    </footer>
  </div>
</template>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none

.header
  background-color #222
  .inner
    max-width 800px
    box-sizing border-box
    margin 0 auto
    padding 20px 15px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    font-size .9em
    margin 0
    float right

.logo
  height 15px
  margin-right 10px
  display inline-block
  vertical-align baseline

.footer
  background-color #ccc
  .inner
    text-align center
    max-width 800px
    box-sizing border-box
    margin 0 auto
    padding 60px 15px

.view
  max-width 800px
  min-height 90vh
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
