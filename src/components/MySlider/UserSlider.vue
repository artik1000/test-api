<template>
    <my-sort-group/>
    <div v-if="this.users.length > 0">
    <section class="users__wrapper">
        <user-item
                v-for="user in users.slice(pageFirst,pageLast)"
                :key="user.id"
                :user="user"
        />
    </section>
    <div class="pagination__wrapper">
        <user-pagination
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :class="{'pagination__active': page === pageNumber}"
                @click="changePage(pageNumber)"
        >
            {{pageNumber}}
        </user-pagination>
    </div>
    </div>
    <div style="text-align: center" v-else>
        <h1>Пользователей нет</h1>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import UserItem from '@/components/MySlider/UserItem'
import SortGroup from '@/components/SortGroup'
import UserPagination from "@/components/MySlider/UserPagination";
import MySortGroup from "../SortGroup";
export default {
    name: 'user-slider',
    components: {
        MySortGroup,
        UserPagination,
        UserItem,
        SortGroup
    },
    props:{
        users: {
            type: Array,
            required: {
                type: Boolean,
                default: true
            }
        }
    },
    data () {
      return {
          page: 1,
          pageFirst: 0,
          pageLast: 5,
      }
    },
    methods: {
        ...mapMutations({
            setUsers: 'TestModule/setUsers',
        }),
        ...mapActions({
            fetchUsers: 'TestModule/fetchUsers',
        }),
        changePage(pageNumber) {
            this.page = pageNumber;
            this.pageFirst = 5 * this.page - 5;
            this.pageLast = 5 * this.page;
        },
    },
    computed: {
        ...mapState({
            selectedSort: state => state.TestModule.selectedSort,
            totalPages: state => state.TestModule.totalPages,
        }),
        ...mapGetters({
        })
    },
    mounted () {
        this.fetchUsers();
    },
}
</script>
<style lang="sass" scoped>
.users__wrapper
   display: flex
   flex-direction: row
   gap: 10px
.pagination__wrapper
    display: flex
    flex-direction: row
    justify-content: center
    margin-top: 16px
    gap: 5px
.pagination__active
    color: blue !important
    background: white !important
    border: 2px solid blue !important
</style>