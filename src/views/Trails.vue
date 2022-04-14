<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" xs="10" offset-xs="1">
        <div class="text-h3 text-center page-title">
          Current Trail Conditions
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" offset-md="4" xs="10" offset-xs="1">
        <TrailCard
          :v-for="trail in trailList"
          :trail="{ fullName: 'dd', status: 'dfdfd'}"
        />
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
import TrailCard from "@/components/TrailCard"

export default {
  name: "TrailsView",
  components: { TrailCard },
  data() {
    return {
      trailList: [
        {
          city: "Cannonsburg",
          county: "Kent",
          fullName: "Cannonsburg State Game Area",
          imagePath: "../assets/images/1.jpg",
          nickName: "CSGA/Egypt Valley",
          status: "PartialOpen",
        },
        {
          city: "Cannonsburg",
          county: "Kent",
          fullName: "Cannonsburg Ski Hill",
          imagePath: "../assets/images/2.jpg",
          nickName: "CSA",
          status: "Open",
        },
      ],
    }
  },
  created() {

  },
}
</script>

<style scoped>

</style>