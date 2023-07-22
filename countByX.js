



    function countByX (x , n){
/* let tab = [] ;
        for (let index = 1; index <= n; index++) {
            
        tab.push(x * index)     
       }
        return tab */

        
        let arr = Array.from(Array(n+1).keys())
        .slice(1)
        .map((num)=> num * x)
        return arr
    }

    console.log(countByX(1 , 10));