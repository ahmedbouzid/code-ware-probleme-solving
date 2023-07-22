

// initial value  
// counting true +1 : Foor loop array if sheep === true ? count+1


function countingSheep (tab){

    let count = 0 ;
tab.map ((sheep) => {
    if (sheep === true ) count ++ ;
})
return count ;
}
console.log(countingSheep([true , false , true , true]));