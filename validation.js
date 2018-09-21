// JavaScript source code
var elementi = document.getElementsByTagName("input");
for (var i = 0; i < elementi.length; i++) {
    if (elementi[i].type !== "submit") {
        elementi[i].onblur = validacija; // svaka funkcija ima ugradjen objekat event
    }
}


function validacija(e)        // "e" smo stavili da oznacava "event" da bude u kontekstu onoga sto se radi.   
{                             //"target" je ime atributa; Kod OOP u C# objektu koji poziva odredjenu funkciju pristupali smo preko 
    var element = e.target;   // pokazivaca "this"; Ovdje se to radi preko objekta "event" i njegovog atributa "target".
    if (element == null)
        element = e;
    var valid = true;
    if (element.value === "")
        valid = false;
    else {
        switch (element.id) {
            case "username":
                if (element.value.length < 3)
                    valid = false;
                break;
            case "password":
                var regexLetter = /[a-zA-Z]/;
                var regexNumber = /[0-9]/;
                valid = regexLetter.test(element.value) && regexNumber.test(element.value);
                break;
            case "password_confirm":
                if (element.value != document.getElementById("password").value)
                    valid = false;
            default:
        }
    }
    if (!valid)
        element.classList.add("error");
    else
        element.classList.remove("error");

    return valid;
}

function clear() {
    for (var i = 0; i < elementi.length; i++) {
        if (elementi[i].type !== "submit")
        {
            elementi[i].value = "";
            elementi[i].classList.remove("error");
        }
    }
}

function validacijaForme() {
    var valid = true;
    for (var i = 0; i < elementi.length; i++) {
        if (elementi[i].type != "submit")
        {
            if (!validacija(elementi[i]))
                valid = false;
        }
    }
    return valid;
}