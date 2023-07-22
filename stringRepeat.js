function repeatStr (nRe , str) {
//// empty string 
let newStr = "" 
/// take the num argument && loop
// add the string to the empty one

/* for (let index = 0; index < nRe; index++) {

    newStr += str ;
}
return newStr
*/
return str.repeat(nRe)
}
 

console.log(repeatStr(20 , 'Ahmed'))



