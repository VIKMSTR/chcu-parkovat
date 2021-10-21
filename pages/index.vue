<template>
 <div>
   <b-container class="mt-3">
     <b-jumbotron class="head" header="Chcu parkovat v Brně!" lead="Aktuální přehled obsazenosti parkovacích domů v Brně">
     
     </b-jumbotron>
    <!-- <b-col cols="12" class="head">
      <image src="header.jpg" width="100%" height="100%"/>
    </b-col> -->
   </b-container>
   <ParkHouses :parkingData="parkingData"/>
 </div>
</template>

<style>
.head{
    background: linear-gradient(to right, #575464ba, #908e92cc), url(~static/jam.jpg) no-repeat top center;
  color: white;
  /* background-image: url("~static/header.jpg"); */
  /* background-size: 100%; */
}
</style>
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
