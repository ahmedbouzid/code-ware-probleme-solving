


    function countPosSumNega(tab) {

        // count pos num with creating empty array
        // create var for sum of negatives
        // loop tab
        // check number ? pos => add to table pos numbers : neg => sumNega
        let posNumbers = [] ;
        let sumNega = 0 ;
        for (let index = 0; index < tab.length; index++) {
            if (tab[index]>0 ) {
                posNumbers.push(tab[index])
            } else {
                sumNega += tab[index] ;
            }
        }
        return [posNumbers.length , sumNega]
    }
    console.log(countPosSumNega([1,5,6,-5,-1]));

    /* 
    
    let posArray = tab.filter((a) => a> 0 ).length()
    let sumNegativ = tab.filter((a) => a < 0) 
    .reduce((acc , val) , acc + val , 0)
    */