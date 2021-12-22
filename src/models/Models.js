import { AsyncStorage } from "react-native";

const Models = {

    async getToken(){
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null){
              return value.token
            }
          } catch (error) {
          }
    },
    async getUser(){
        try {
            const value = await AsyncStorage.getItem('user');
            if (value !== null){
              return value
            }
          } catch (error) {
          }
    },

    async login(data){
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/login`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':'Basic YWRtaW5Ad29ya2RvdXQuY29tOndvcmtkb3V0'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async register(data){
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/register`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':'Basic YWRtaW5Ad29ya2RvdXQuY29tOndvcmtkb3V0'
            },
            body: JSON.stringify({
                nameUser : data.user, 
                password : data.password, 
                email : data.email, 
                phoneNumber: data.phonenumber, 
                gender: data.gender, 
                dob: data.dob, 
                address: data.address
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async getProfil(){
        const token = await AsyncStorage.getItem('token')
        const user = await AsyncStorage.getItem('user')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/user/${JSON.parse(user).id}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async updateProfil(){
        const token = await AsyncStorage.getItem('token')
        const user = await AsyncStorage.getItem('user')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/user/${JSON.parse(user).id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
            body: JSON.stringify({
                nameUser : data.user, 
                password : data.password, 
                email : data.email, 
                phoneNumber: data.phonenumber, 
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async getWorkout(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/workouts`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getActivity(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/activities`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getCart(){
        const token = await AsyncStorage.getItem('token')
        const user = await AsyncStorage.getItem('user')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/cart/${JSON.parse(user).id}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async postCart(data){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/cart`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },body: JSON.stringify({
                idUser : data.idUser, 
                amountItem :data.amounItem,
                idProduct:data.idProduct
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async putCart(idProduct,data){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/cart/${idProduct}`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
            body: JSON.stringify({
                amounItem : data.amountItem, 
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async deleteCart(idCart,data){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/cart/${idCart}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
            body: JSON.stringify({
                amounItem : data.amountItem, 
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async getMembershipProduct(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/product/memberships`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getMembershipProductById(idMembershipProduct){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/membership/${idMembershipProduct}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async putMembership(idMembership){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/membership/${idMembership}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
            body: JSON.stringify({
                idUser : data.idUser, 
                idMembershipProduct : data.idMembershipProduct, 
                startDate : data.startDate, 
                endDate: data.endDate, 
            })
        })
        const res = await fetchItem.json();
        return res;
    },
    async getNotification(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/notification`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getProduct(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/products`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getProductById(idProduct){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/product/${idProduct}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getPromo(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/promos`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getPromoById(idPromo){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/promo/${idPromo}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getSchedule(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/schedules`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getScheduleById(idSchedule){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/schedule/${idSchedule}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getSchedule(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/schedules`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getTrainer(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/trainers`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
    async getTrainerById(idTrainer){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/trainer/${idTrainer}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
}

    

export default Models
