<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card v-for="announcement in announcements" :key="announcement.id">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{announcement.title}}</div>
            <time class="grey--text" :datetime="announcement.created">{{ announcement.created | moment("from") }}</time>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Listen now</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <!--<v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>-->
            More
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{announcement.body}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    created() {
      this.listAnnouncements()
    },

    data: () => ({
      show: false
    }),

    // make states available
    computed: {
      ...mapState({
        announcements: state => state.announcements.results,
        pending: state => state.pending,
        error: state => state.error
      })
    },
    methods: {
      ...mapActions([
        "listAnnouncements"
      ])
    }
  }
</script>
