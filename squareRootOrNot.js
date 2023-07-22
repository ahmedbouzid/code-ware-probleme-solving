

    function squareRootOrNot(tab) {
        /// loop throw the array
        /// check if number has integer square root or not 
        /// if true take the root if not squre the number
        // return new array

 /*        let newTab = [] ; 
        
        for (let index = 0; index < tab.length; index++) {

            if ( Number.isInteger(Math.sqrt(tab[index]))) {
                newTab.push(Math.sqrt(tab[index]))
            }
            else { 
                newTab.push(tab[index] * tab[index])
            }
            
        }
        return newTab ; */

        return tab.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num *num )

    }
    console.log(squareRootOrNot([5 , 4 , 8 , 12 , 9 ]));