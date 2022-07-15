<template>
    <button class="my__button" :disabled="disableBtn === true">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button',
    props: {
        disableBtn: {
            type: Boolean,
            required: false
        }
    }
}
</script>
<style lang="sass" scoped>
.my__button
    border: 2px solid transparent
    padding: 10px 16px 10px 16px
    border-radius: 10px
    background: white
    color: blue
    font-weight: bold
.my__button:hover
    border: 2px solid white
    padding: 10px 16px 10px 16px
    border-radius: 10px
    background: transparent
    color: white
    font-weight: bold
.my__button:disabled:hover
    opacity: 0.5
.my__button:disabled
    opacity: 0.5
</style>