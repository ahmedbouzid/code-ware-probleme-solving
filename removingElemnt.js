


    function removingElement(tab) {


        /// loop throught array
        /// check if the element in second position
        /// remove the seconde element 
        /// return the new array 

        let neArr = [] ; 

  /*       for (let index = 0; index < tab.length; index++) {
            if (index % 2 ===0) {
                neArr.push(tab[index])
            }
        }
        return neArr */
        return tab.filter((el , i) =>  i % 2 === 0 
        )
    }

    console.log(removingElement([2,5,8,9,10,11,12]))