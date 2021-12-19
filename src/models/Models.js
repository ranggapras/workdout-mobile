const Models = {
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
}
    

export default Models
