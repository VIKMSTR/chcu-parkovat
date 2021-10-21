<template>
    <b-container fluid="md" class="parking_container" v-if="parkingData.length >0">
        <!-- <div class="garage" v-for="parking in freeGarages" :key="parking.attributes.ObjectId">
            <b-alert variant="success" show v-if="parking.attributes.capacity_procent < 75">
                <b-row class="d-flex justify-content-between flex-row">
                <b-col class="flex-column" cols="8" ><p class="textCenter lead">{{parking.attributes.name}} </p>
                </b-col>
                <b-col class="flex-column" cols="1"><p class="textCenter float-right lead"><b>{{parking.attributes.free}}</b>/{{parking.attributes.capacity}} </p>
                </b-col>
                <b-col class="flex-column " cols= "1"><b-button variant="primary" class="float-right buttonCenter" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button>
                </b-col>
                  </b-row>
            </b-alert> 
             <b-alert variant="warning" show v-if="parking.attributes.capacity_procent >= 75">
               <b-row class="d-flex justify-content-between flex-row">
                    <b-col class="flex-column" cols="8" >
                        <p class="textCenter lead">{{parking.attributes.name}} </p>
                    </b-col>
                    <b-col class="flex-column" cols="1">
                        <p class="textCenter float-right lead">{{parking.attributes.free}}/{{parking.attributes.capacity}} </p> 
                    </b-col>
                    <b-col class="flex-column " cols= "1">
                        <b-button variant="primary" class="float-right buttonCenter" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button>
                    </b-col>
                </b-row>
            </b-alert>
        </div> -->
       <b-table-simple borderless card>
         <b-tr  v-for="parking in freeGarages" :key="parking.attributes.ObjectId" >
            <b-td variant="success" show v-if="parking.attributes.capacity_procent < 75"  class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="warning" show v-if="parking.attributes.capacity_procent >= 75" class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="success" class="text-center align-middle" show v-if="parking.attributes.capacity_procent < 75" >{{parking.attributes.free}}/{{parking.attributes.capacity}}</b-td>
            <b-td variant="warning" class="text-center align-middle" show v-if="parking.attributes.capacity_procent >= 75" >{{parking.attributes.free}}/{{parking.attributes.capacity}}</b-td>
            <b-td variant="success" class="text-right align-middle" show v-if="parking.attributes.capacity_procent < 75"  > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button></b-td>
            <b-td variant="warning" class="text-right align-middle" show v-if="parking.attributes.capacity_procent >= 75" > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button></b-td>
         </b-tr>
       </b-table-simple> 
    <h2> Obsazeno </h2>
    <b-table-simple borderless>
         <b-tr  v-for="parking in occupiedGarages" :key="parking.attributes.ObjectId" >
            <b-td variant="secondary" show v-if="parking.attributes.capacity_procent < 75"  class="align-middle">{{parking.attributes.name}}</b-td>
            <b-td variant="danger" class="text-center align-middle" show v-if="parking.attributes.capacity_procent < 75" >{{parking.attributes.free}}/{{parking.attributes.capacity}}</b-td>
            <b-td variant="secondary" class="text-right align-middle" show v-if="parking.attributes.capacity_procent < 75"  > <b-button variant="primary" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button></b-td>
         </b-tr>
       </b-table-simple> 
     <!-- <div class="garage" v-for="parking in occupiedGarages" :key="parking.attributes.ObjectId">
            
            <b-alert variant="danger" show>
                 <b-row class="d-flex justify-content-between flex-row">
                <b-col class="flex-column" cols="8" >
                    <p class="textCenter lead">{{parking.attributes.name}} </p>
                    </b-col>
                <b-col class="flex-column" cols="1"><p class="textCenter float-right lead">{{parking.attributes.free}}/{{parking.attributes.capacity}} </p> 
                </b-col>
                <b-col class="flex-column " cols= "1"><b-button variant="primary" class="float-right buttonCenter" v-bind:href="'http://www.google.com/maps/place/' +parking.attributes.Latitude +',' + parking.attributes.Longitude">mapa</b-button>
                </b-col>
                  </b-row>
            </b-alert>
    </div> -->
    <b-row v-if="occupiedGarages.length === 0">
        <b-col cols="12">
            <p class="lead">Nikde. Vypadá to, že je všude místo! :)</p>
        </b-col>
    </b-row>
    <hr/>
    <h2>Chcu to nechat na ulici? </h2>
    <p>Taky se dá (kromě centra). Víc info tady: <a href="https://www.parkovanivbrne.cz">Parkování v Brně</a> </p> 
     <hr/>
    <h6>Aktualizováno: {{updated}}</h6> 
    <h6>Zdrojáky: <a href="https://github.com/VIKMSTR/chcu-parkovat">na GitHubu</a></h6> 
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
import moment from "moment"
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
    updated() {
        moment.locale("cs")
        return  moment.unix(String(this.parkingData[0].attributes.startdate/1000)).format("llll")
    }
  },
}
</script>