function getData(){
    //var promise = new Promise(function(resolve , reject ))
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {name:'abha' , email:'abc@gmail.com'},
                    {name:'Neha' , email:'neha@gmail.com'},
                ]);
            },1000);
        });}
    
    function onFulfilled(users){
        console.log(users);
    } 
    const promise = getData();
    promise.then(onFulfilled);