<template>
    <main class="user__page__wrapper">
        <div v-if="!gotUser[0]">
            <h1 class="page__description">User is unset</h1>
        </div>
        <div v-else>
            <h1 class="page__description">Page of {{gotUser[0].name}}</h1>
        </div>
        <user-item
                :user="gotUser[0]"
                class="center"
        />
    </main>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import UserItem from "../components/MySlider/UserItem";
export default {
    name: 'UserPage',
    components: {UserItem},
    computed: {
        ...mapState({
            gotUser: state => state.TestModule.gotUser,
        }),
    }
}
</script>
<style lang="sass" scoped>
.user__page__wrapper
   padding: 24px
   display: flex
   flex-direction: column
   justifly-content: center
.center
    display: flex
    align-self: center
    border: none !important
    height: min-content
</style>