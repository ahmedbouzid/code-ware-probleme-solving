


function welcom(language) {
    //// create object for db
    /// check if lang exist 
    /// return the welcom with current language 
    /// not exist return wit english
    let languages = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
      };

      if(languages.hasOwnProperty(language)) {
        return languages[language] ;
      }
      else {
        return languages ['english']
      }

}
console.log(welcom('french'));