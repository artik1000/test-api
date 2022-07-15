<template>
<div class="pagination">
    <div class="pagination__number"><slot></slot></div>
</div>
</template>
<script>
export default {
    name: 'user-pagination',
}
</script>
<style lang="sass" scoped>
.pagination
    position: relative
    color: white
    background: blue
    width: 40px
    height: 40px
    border-radius: 50%
    border: 2px solid white
.pagination__number
    width: min-content
    height: min-content
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    font-weight: bold
.pagination:hover
    transition: 0.5s
    color: blue
    background: white
    border: 2px solid blue
</style>