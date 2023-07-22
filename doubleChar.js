

    function doubleChar(str) {
        ///  turn string into arr
        /// loop str 
        /// repeate each element once
        /// return the array into string


        return str.split('')
        .map((s) => s.repeat(2))
        .join('')
    }

console.log(    doubleChar('dkdkdk'));