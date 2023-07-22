

    function countMonkeys (n) {
            /// create emmpty arr
            // loop throught the number givrn 
            //push the number to arr 
            // return arr 

            let newArr = [] ;
            for (let index = 0; index <= n; index++) {
                newArr.push(index)
            }
            return newArr
    }
    console.log(countMonkeys(10));