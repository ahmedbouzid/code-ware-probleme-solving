



        function average(tab) {

            // create var
            //loop the arr 
            /// divide the variable

            let sum = 0 ;
            for (let index = 0; index < tab.length; index++) {
                sum += tab[index]
            }
            let res = sum / tab.length
            return res
        }

        console.log(average([5 , 5 , 4]));