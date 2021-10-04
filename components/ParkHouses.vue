<template>
    <div class="parking_container" v-if="parkingData.length >0">
        <div class="garage" v-for="parking in freeGarages" :key="parking.attributes.ObjectId">
            
            <p>{{parking.attributes.name}} : {{parking.attributes.free}}/{{parking.attributes.capacity}} <a v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</a></p>
        </div>
    <h2> Obsazeno </h2>
     <div class="garage" v-for="parking in occupiedGarages" :key="parking.attributes.ObjectId">
            
            <p>{{parking.attributes.name}} : {{parking.attributes.free}}/{{parking.attributes.capacity}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"ParkHouses",
    props: {
        parkingData : Array
    },
    computed: {
       freeGarages() {
           return this.parkingData.filter(garage => {
               return (garage.attributes.free > 0)
           } ).sort((g1,g2) => g2.attributes.free - g1.attributes.free)
       },
       occupiedGarages() {
           return this.parkingData.filter(garage => {
               return (garage.attributes.free === 0)
           } )
       } 
    }

}
</script>