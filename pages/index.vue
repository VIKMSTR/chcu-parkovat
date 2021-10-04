<template>
  <ParkHouses :parkingData="parkingData"/>
</template>

<script>
import parkHouses from "@/components/ParkHouses.vue";

export default {

  name: "landing-page",
  components: {
    parkHouses
  },
  data() {
    return {
      parkingData: []
    };
  },
  
  mounted() {
    this.getParkingData()
  },
  methods: {
  async getParkingData(){
    const res = await this.$store.dispatch("getParkingData");
    this.parkingData = res.data.features
  }
  }
  
}
</script>
