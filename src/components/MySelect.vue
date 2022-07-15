<template>
    <select v-model="modelValue" @change="updateInput" class="select">
        <option class="option" value="" disabled selected>По умолчанию</option>
        <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            updateInput (event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>
<style lang="sass" scoped>
.select
        -moz-appearance: none
        -webkit-appearance: none
        background-color: #FFFEFB
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
        border: 1px solid blue
        border-radius: 10px
        color: #B4B4B4
        height: 36px
        padding: 10px 26px 10px 16px
        background-repeat: no-repeat
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264' stroke='%23B4B4B4'/%3E%3C/svg%3E")
        background-position: calc(10px + 100px) 16px
.option
        color: #34495E
        font-size: 15px
        font-weight: bold
.select:hover,
.select:focus,
.select:active,
.select:checked
        color: black
        background-repeat: no-repeat
        background-position: calc(10px + 100px) 16px
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264' stroke='%23000000'/%3E%3C/svg%3E")
</style>