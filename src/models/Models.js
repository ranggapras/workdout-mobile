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
        })
        const res = await fetchItem.json();
        return res;
    },
    async getWorkout(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/workout`,{
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
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/activity`,{
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
    async postCart(){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/cart`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token).token}`
            },
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
    async getMembership(idMembership){
        const token = await AsyncStorage.getItem('token')
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/membership/${idMembership}`,{
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
    async getNotification(idMembership){
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
}

    

export default Models
