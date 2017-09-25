<template>
  <v-app>
    <v-toolbar dark>
      <v-toolbar-title>
        <router-link to="/" exact>
          <img class="logo" height="17" src="https://developer.blackboard.com/assets/images/bb_logo_subpages.png" alt="logo">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/courses" flat>Courses</v-btn>
        <v-btn to="/announcements" flat>Announcements</v-btn>
        <v-btn to="/grades" flat>Grades</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container>
        <!--<transition name="fade-transition">-->
          <router-view class="view"></router-view>
        <!--</transition>-->
      </v-container>
    </main>
    <v-footer>
      <p class="text-xs-center">
        <a class="github" href="https://github.com/LeoColomb/blackboardplus" target="_blank" rel="noopener">
          Made with ❤️by Léo Colombaro
        </a>
      </p>
      <p class="text-xs-center">
        <small>© {{ new Date().getFullYear() }} <a href="https://colombaro.fr">Léo Colombaro</a> — All rights reserved.</small>
      </p>
      <p class="text-xs-center">
        <small>Blackboard</small>
      </p>
    </v-footer>
  </v-app>
</template>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main.styl'
</style>
