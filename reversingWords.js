


    function reserveWord (arr) {
        // loop array 
        // inver arr 
        // return new arr

/*         let newArr = [] ;
        for (let i = 0 ; i < arr.length ; i++) {
            newArr.push(arr[i] * -1)
        }
        return newArr */
       return arr.map((el) => el * -1)
        
    }

console.log(reserveWord( [1,5,8]));