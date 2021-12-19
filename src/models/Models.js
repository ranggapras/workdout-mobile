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
        const fetchItem = await fetch(`http://47.241.214.211:3000/api/user/${this.getUser().id}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${this.getToken()}`
            },
        })
        const res = await fetchItem.json();
        return res;
    },
}
    

export default Models
