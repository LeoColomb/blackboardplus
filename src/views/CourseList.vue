<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card v-for="course in courses" :key="course.id">
        <v-card-media>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-middle flexbox>
                <span class="headline" v-text="course.courseId"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{course.name}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn :href="course.externalAccessUrl" flat>Listen now</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <!--<v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>-->
            More
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{course.body}}
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
      this.listCourses()
    },

    // make states available
    computed: {
      ...mapState({
        courses: state => state.courses.results,
        pending: state => state.pending,
        error: state => state.error
      })
    },
    methods: {
      ...mapActions([
        "listCourses"
      ])
    }
  }
</script>
