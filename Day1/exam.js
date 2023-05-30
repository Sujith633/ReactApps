var promise = new Promise(function(resolve , reject){
    const a = "Simplilearn";
    const b = "Simplilearn";
    if(a==b){
        resolve();
    }else{
        reject();
    }});
    //promise.then() and .catch()
    promise.then(function(){
        console.log('Welcome in Simplilearn ');
    }).catch(function(){
        console.log('Some error !!!!');
    })