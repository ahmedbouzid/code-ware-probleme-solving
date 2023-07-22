

/// radom number
/// change number to string
///  split  the string
/// convert string to number 
/// reverse the array 
function numberToReversedArray (n) {


    return n.toString().split('').map((m)=> Number(m))
    .reverse()
}

console.log( numberToReversedArray(65555111));