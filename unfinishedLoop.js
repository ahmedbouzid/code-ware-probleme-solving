

    function unfinishedLoop (num) {

        let newArr = [] 
        for (let count = 1 ; count <= num  ; count++) {
            newArr.push(count)
        }
        return newArr
    }

    console.log(unfinishedLoop(10))