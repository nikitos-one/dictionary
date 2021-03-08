<template>
   <v-toolbar class="main-toolbar"
              dense
              dark
              color="blue"

   >

    <v-toolbar-title>Word Keeper</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn class="main-toolbar__button"
           text>
      <v-icon>mdi-star</v-icon>
      <span>{{  title }}</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: process.env.VUE_APP_API_BASE_URL
    }
  }
}
</script>

<style lang="sass" scoped>
  .main-toolbar
    &__button
      text-transform: capitalize
      span
        padding: 5px
        font-size: 1.25rem

</style>