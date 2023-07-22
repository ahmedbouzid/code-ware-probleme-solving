



    function basicalMathOper( op , val1 , val2) {


   /*      if(op == '+' ) return  val1 + val2      
        if(op == '-') return val1 - val2
        if(op == '/') return val1 / val2
        if(op == '*') return val1  *  val2 */

        return eval(val1 + op +  val2)
    }

    console.log(basicalMathOper('/' , 20 ,30));