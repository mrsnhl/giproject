//declaration of function 
function newfunction(name);
console.log('their name',name);

// let newName=['chandramani','deepesh'];
// let newAge=['20','21'];
// for(i=0;i<2;i++){
//     console.log(newName[i],newAge[i])
// }
let nameGenerator=function(name,age){
    return{
        name:name,
        age:age
    }
}