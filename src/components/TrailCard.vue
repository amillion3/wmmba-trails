<template>
  <v-card
      elevation="4"
      outlined
      shaped
  >
    <h3>{{ trail.fullName }}</h3>
    <p>{{ trail.status }}</p>
  </v-card>
</template>

<script>
export default {
  name: "TrailCard",
  props: ['trail'],
  setup(props) {
    console.log(props)
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>