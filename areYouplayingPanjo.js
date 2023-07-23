


    function arePlaying(name) {

         //// check the coming name 
         /// if the name start with R or R return play banjo
         /// if not return dosent play
/*          if (name.charAt(0) === 'r' || name.charAt(0) === 'R'){
            return name + 'play banjo'
         }
         else { 
           return name +  ' dosnet play'
         } */
         return name[0] === 'r' || name[0] === 'R' ? name + 'play' : 'does not play'

    }

    console.log(arePlaying('Rami '));