function controle(){
    var saisie1 = document.getElementById("prenom1").value;
    var saisie2 = document.getElementById("prenom2").value;

    var ens = saisie1 + saisie2;

    var resul = 0;

    for (var i = 0; ens.length != 0; i++) {
        for (var j = 1 ; j < ens.length; j++){
            if ( ens.charAt(0) == ens.charAt(j) ) {
                resul++;
            }
        }
        ens = ens.substr(1);
    }

    var test = resul / (saisie1+saisie2).length;
  
    if (test > 0.5) { 
        document.body.style.backgroundImage = "url('images/coeurRose.gif')";
    } 
    else {
        document.body.style.backgroundImage = "url('images/smiley.gif')";
    }
    document.getElementById('demo').innerHTML = test*100 + "%";
 }


    

  

    


    

    




  
 