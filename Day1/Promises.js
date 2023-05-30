function getData(){
    return[
    {name:'Neha' , email:'neha@gamil.com'},
    {name:'Rohit' , email:'rohit@gamil.com'},
    {name:'Virat' , email:'virat@gamil.com'},
    {name:'eDhoni' , email:'Dhoni@gamil.com'},
    ];
}
function findData(name){
    const users = getData;
    const user = users.find((user)=>user.name===name);
    return user;
}
console.log(findData('Neha'));