console.log('JS loaded in browser');
fetch('http://localhost:3000/weatherJSON?address=%27Manikonda%27&location=%27Hyderabad%27').then((response)=>{
    response.json().then((data)=>{

        if(data.error){
            console.log('Error Occured')
        }else{
            console.log('git')
            console.log('Data from HTTP request:'+data.title+"::"+data.forecast+"::"+data.address+"::"+data.location)
        }

    })

})