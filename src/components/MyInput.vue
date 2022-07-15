<template>
    <input v-if="typ === 'tel'" v-maska="'+7(###)###-##-##'" class="my__input" :vlaue="modelValue" :placeholder="placeholder" @input="updateInput" required/>
    <input v-else class="my__input" type="text" :typle="typ" :vlaue="modelValue" :placeholder="placeholder" @input="updateInput" required/>
</template>
<script>
import { maska } from 'maska'
export default {
    name: 'my-input',
    directives: { maska },
    props:{
        modelValue: [String,Number],
        placeholder: String,
        typ: String
    },
    methods: {
        updateInput (event) {
            this.$emit('update:modelValue',event.target.value)
        }
    }
}
</script>
<style lang="sass" scoped>
    .my__input
        -webkit-appearance: none
        border: 1px solid transparent
        padding: 10px 16px 10px 16px
        border-radius: 10px
        box-sizing: border-box
        display: flex
        width: 100%
    .my__input::placeholder
        color: #B4B4B4
    .my__input:active, :hover, :focus
        outline: 0
        outline-offset: 0
</style>