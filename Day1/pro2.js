// The challenge is how to access the users returned from the getData() function after one second. 
// One classical approach is to use the callback.
//Because getData() return empty array the users array is empty (line A) so find() on the users array could not find the name /data and return undefind 
//The challenge is how to access the users returned from the getUsers() function after one second. One classical approach is to use the callback.
function getData(callback){
        // let users =[];
        setTimeout(()=>{
            callback = [
                {name:'abha' , email:'abc@gmail.com'},
                {name:'Neha' , email:'neha@gmail.com'},
                {name:'mayaa' , email:'maya@gmail.com'},
                {name:'rupa' , email:'rupa@gmail.com'},
            ];
        } , 1000);
        // return users;
}
function findData(name, callback){
    const users = getData;
    const user = users.find((user)=>user.name===name);
    // return user;
    callback(user);
}
// console.log(findData('Neha'))
findData('Neha',console.log);
