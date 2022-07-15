<template>
    <div class="sort__group">
        <my-select
                :model-value="selectedSort"
                @update:model-value="setSortUsers"
                :options="sortOptions"
        />
        <my-input
                v-model="searchQuery"
                @update:model-value="setSearchQuery"
                class="search__input"
                :placeholder="'Укажите город'"
        />
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import MySelect from '@/components/MySelect'
import MyInput from '@/components/MyInput'
export default {
    name: 'my-sort-group',
    components: {
        MySelect,
        MyInput
    },
    data () {
      return {
          sortOptions: [
              { value: 'toAlph', name: 'A-Z' },
              { value: 'reverseAlph', name: 'Z-A'}
          ]
      }
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'TestModule/setSearchQuery',
            setSortUsers: 'TestModule/setSortUsers',
        }),
    },
    computed:{
        ...mapState({
            selectedSort: state => state.TestModule.selectedSort,
            searchQuery: state => state.TestModule.searchQuery,
        }),
        ...mapGetters({
            sortByCity: 'TestModule/sortByCity'
        })
    }
}
</script>
<style lang="sass" scoped>
.sort__group
        display: flex
        flex-direction: row
        width: 100%
        padding-bottom: 16px
        justify-content: space-between
.search__input
    border: 2px solid blue
    width: 20%
</style>