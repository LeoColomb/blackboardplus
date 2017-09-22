<template>
  <div>
    <ul>
      <li v-for="announcement in announcements">{{announcement}}</li>
    </ul>
    <p v-if="pending.announcement">loading posts...</p>
    <p v-if="error.announcement">loading failed</p>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ICAL from 'ical.js'

  export default {
    created() {

      let jCalData = ICAL.parse(someICalData);
      let comp = new ICAL.Component(jCalData[1]);
    },

    // make states available
    computed: {
      ...mapState({
        announcements: state => state.announcements.learn,
        pending: state => state.pending,
        error: state => state.error
      })
    },
    methods: {
      ...mapActions([
        "getAnnouncement"
      ])
    }
  }
</script>
