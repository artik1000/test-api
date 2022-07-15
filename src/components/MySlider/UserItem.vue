<template>
    <article class="card__user">
        <div class="img__user__block">
            <img
                    class="img__user"
                    :src="user.avatar"
                    @click="openUser(user)"
            />
        </div>
        <div>
            <h1 @click="openUser(user)" >имя: {{user.name}}</h1>
        </div>
        <div>
            <h1>город: {{user.city}}</h1>
        </div>
        <div class="contacts__user">
            <div>
                <h5>телефон: {{user.phone}}</h5>
            </div>
            <div>
                <h5>email: {{user.email}}</h5>
            </div>
        </div>
        <div><h5>сайт: <a :href="user.site">{{user.site}}</a></h5></div>
        <button class="btn__remove" @click="removeUser(user)">Удалить</button>
    </article>
</template>
<script>
import axios from "axios";
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    name: 'user-item',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods:{
        async removeUser (user) {
            await axios.delete(`/api/users/${user.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            this.$store.commit('TestModule/removeUser', user);
        },
        openUser (user) {
            this.showUser(user);
            this.fetchUser();
            this.$router.push('/userpage');
        },
        ...mapMutations({
            showUser: 'TestModule/showUser'
        }),
        ...mapActions({
            fetchUser: 'TestModule/fetchUser'
        }),
    }
}
</script>
<style lang="sass" scoped>
h1
    margin: 0
h5
    margin: 0
.card__user
    display: flex
    flex-direction: column
    background: white
    border: 1px solid blue
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
    border-radius: 10px
    padding: 10px
    gap: 16px
    text-align: left
    width: 20%
.img__user__block
    width: 100%
    height: 250px
.img__user
    width: 100%
    height: 100%
    object-fit: cover
    border-radius: 10px
.contacts__user
    display: flex
    flex-direction: column
.btn__remove
    color: white !important
    background: red !important
    border: 2px solid white !important
    padding: 10px 16px 10px 16px
    border-radius: 10px
.btn__remove:hover
    color: red !important
    background: white !important
    border: 2px solid red !important
</style>