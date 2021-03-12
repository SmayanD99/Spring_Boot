
function validate() {
    event.preventDefault();
    var e = document.getElementById("movies");
    var film = e.options[e.selectedIndex].text;
    var amount=document.f1.antall.value;
    var first=document.f1.forst.value;
    var last=document.f1.etrn.value;
    var telephone=document.f1.telephone.value;
    var email=document.f1.email.value;

    var status = true;

    if (amount.length<1){
        document.getElementById("antallVal").innerHTML= " Vennglist velg antall billet";
        status = false;
    }


    if(first.length<=1){
        document.getElementById("forstVal").innerHTML= " Vennglist skrive inn fornavn";
        status=false;
    }

    if(last.length<=1){
        document.getElementById("etrnVal").innerHTML= " Vennglist skrive inn etternavn";
        status=false;
    }

    if(telephone.length<1){
        document.getElementById("telephoneVal").innerHTML= " Vennglist skrive inn gylding telefon nummer";
        status=false;
    }
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if ((atpos < 1) || ( dotpos - atpos < 2)){

        document.getElementById("emailVal").innerHTML= " Vennglist skrive inn gyldig epost";
        status=false;
    }
    if(status === true){
        var array = [];
        array.push(film, amount, first, last, telephone, email)
        document.getElementById("printloc").innerHTML = array.toString();
    }
}
function clear(){
    window.location.reload();
}
