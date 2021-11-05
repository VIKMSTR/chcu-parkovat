<template>
    <b-container fluid="md" class="parking_container" v-if="parkingData.length >0">
       <b-table-simple borderless card>
         <b-tr><b-th>{{ $t('parking') }}</b-th><b-th class="text-center align-middle">{{ $t('free') }}</b-th></b-tr>
         <b-tr  v-for="parking in freeGarages" :key="parking.attributes.ObjectId" >
            <b-td variant="success" show v-if="parking.attributes.capacity_procent > 25"  class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="warning" show v-if="parking.attributes.capacity_procent <= 25" class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="success" class="text-center align-middle lead" show v-if="parking.attributes.capacity_procent > 25" >{{parking.attributes.free}}</b-td>
            <b-td variant="warning" class="text-center align-middle lead" show v-if="parking.attributes.capacity_procent <= 25" >{{parking.attributes.free}}</b-td>
            <b-td variant="success" class="text-right align-middle" show v-if="parking.attributes.capacity_procent > 25"  > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">{{ $t('map') }} </b-button></b-td>
            <b-td variant="warning" class="text-right align-middle" show v-if="parking.attributes.capacity_procent <= 25" > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">{{ $t('map') }} </b-button></b-td>
         </b-tr>
       </b-table-simple> 
    <h2> {{ $t('full') }} </h2>
    <b-table-simple borderless>
         <b-tr  v-for="parking in occupiedGarages" :key="parking.attributes.ObjectId" >
            <b-td variant="secondary"  class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="danger" class="text-center align-middle lead"  >{{parking.attributes.free}}</b-td>
            <b-td variant="secondary" class="text-right align-middle"   > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button></b-td>
         </b-tr>
       </b-table-simple> 
    <b-row v-if="occupiedGarages.length === 0">
        <b-col cols="12">
            <p class="lead">{{ $t('nofull') }}</p>
        </b-col>
    </b-row>
    <hr/>
    <p class="font-italic">
       {{ $t('explanation') }}
       </p>
       <hr/>
    <h2>{{ $t('onstreet_header') }}</h2>
    <p>{{ $t('onstreet_content') }} <a href="https://www.parkovanivbrne.cz">{{ $t('onstreet_parking') }}</a> </p> 
     <hr/>
     
    <!-- <h6>{{ $t('updated') }}: {{updated}}</h6>  -->
    <h6>{{ $t('updated') }}: {{ $d(new Date(this.parkingData[0].attributes.startdate), 'long') }}</h6>
    <p></p>
    <h6>{{ $t('sources') }}: <a href="https://github.com/VIKMSTR/chcu-parkovat">{{ $t('on_github') }}</a></h6> 
    </b-container>
</template>
<style>
table {
  border-collapse:separate; 
  border-spacing: 0 1em;
}
.buttonCenter {
    margin-top: 1em
}
.textCenter {
    padding-top: 1em
}
</style>
<script>
// import moment from "moment"
export default {
  name: 'ParkHouses',
  props: {
    parkingData: Array,
  },
  computed: {
    freeGarages() {
      return this.parkingData
        .filter((garage) => {
          return garage.attributes.free > 0
        })
        .sort((g1, g2) => g2.attributes.capacity - g1.attributes.capacity)
    },
    occupiedGarages() {
      return this.parkingData.filter((garage) => {
        return garage.attributes.free === 0
      })
    },
    // updated() {
    //     moment.locale(this.$i18n.locale)
    //     return  moment.unix(String(this.parkingData[0].attributes.startdate/1000)).format("llll")
    // }
  
  },
}
</script>