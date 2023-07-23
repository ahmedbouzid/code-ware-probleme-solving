

    function getABonus(sal , bon) {

        return bon ? sal * 10 + '$' : sal+'$'
    }
    console.log(getABonus(20 , false));