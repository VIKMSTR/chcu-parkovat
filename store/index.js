   
export const state = () => ({})

export const getters = {

}

export const mutations = {}

export const actions = {
    async getParkingData(){
        const res = await this.$axios.get("/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json")
        return res;
    }
}