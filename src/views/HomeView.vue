<template>
  <main class="home">
   <h1 class="page__description">Users Page</h1>
      <user-slider
              :users="sortByCity"
      />
  </main>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import UserSlider from '@/components/MySlider/UserSlider'
export default {
  name: 'HomeView',
  components: {
    UserSlider
  },
  computed: {
      ...mapState({
          users: state => state.TestModule.users,
      }),
      ...mapGetters({
          sortByCity: 'TestModule/sortByCity'
      })
  }
}
</script>
<style lang="sass" scoped>
.home
    padding: 24px
</style>
