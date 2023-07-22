

function needlePos(tab) {
    /// loop throught array 
    /// check if element == neddle
    // return mess

/*     for (let i = 0 ; i <tab.length ; i++) {
        if (tab[i] ==='needle') {
            return 'found the needle ' + i
        }
    } */
    return    'found the needle ' + tab.indexOf ('needle')
}
console.log(needlePos(['dd,,d' ,'needle']));