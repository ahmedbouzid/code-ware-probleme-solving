/// sum with ouut hightest && lowest number 

// check if empty return 0
// find the lowest && highest number 
// filter the array
// sum of array numbers
function sumWithoutHighestLowest(tab) {

    if (tab === null) return 0

/*     let max = Math.max(...tab) ;
    let min = Math.min(...tab) ;
    console.log(min , max);
    let filteredTab = tab.filter((x) => x !== min && x !== max)
    console.log(filteredTab);
    let newTab = filteredTab.reduce((acc , current) => acc + current , 0) ;
    console.log(newTab); */
/*     return tab
    .filter((x) => x !== Math.max(...tab) && x !== Math.min(...tab) )
    .reduce((acc , current) => acc + current , 0) */
    return tab.sort((a , b) => a - b)
    .slice(1 , -1)
    .reduce((acc , val) => acc + val , 0)


}
console.log(sumWithoutHighestLowest([2 , 52 , 5 , 3 , 35 , 52]));