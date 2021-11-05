<template >
 <div>
  
   <b-container class="mt-3">
     <LangSelector />
     <b-jumbotron class="head" header="Chcu parkovat v Brně!" :lead="$t('description')">
     
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
import langSelector from "@/components/LangSelector.vue";

export default {

  name: "landing-page",
  components: {
    parkHouses,
    langSelector
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
  },
 head() {
      return {
        title: this.$t('title')
      }
} 
}

</script>
