<template>
  <div class="add__user__page">
    <h1 class="page__description">Add User</h1>
    <my-form/>
  </div>
</template>
<style lang="sass" scoped>
.add__user__page
    padding: 24px
</style>
<script>
import MyForm from "../components/MyForm";
export default {
    components: {MyForm}
}
</script>