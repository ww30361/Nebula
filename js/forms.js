function checkForm(){
    var error = false;

    var contactName = document.getElementById("contactName");
    var contactEmail = document.getElementById("contactEmail"); 
    var information = document.getElementById("information");

    if (contactName.value == ""){
        document.getElementById("contactName").className="form-control is-invalid";
        document.getElementById("errorName").innerHTML="Imię i nazwisko jest wymagane";
        error=true;
    } else {
        document.getElementById("contactName").className="form-control is-valid";
    }

    if(contactEmail.value == ""){
        document.getElementById("contactEmail").className="form-control is-invalid";
        document.getElementById("errorEmail").innerHTML="Adres email jest wymagany";
        error=true;
    } else {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false) {
            document.getElementById("contactEmail").className="form-control is-invalid";
            document.getElementById("errorEmail").innerHTML="Podany adres email jest nieprawidłowy";
            error=true;
        } else {
            document.getElementById("contactEmail").className="form-control is-valid";
        } 
    }

    if (information.value == ""){
        document.getElementById("information").className="form-control is-invalid";
        document.getElementById("errorInformation").innerHTML="Informacja jest wymagana";
        error=true;
    } else {
        document.getElementById("information").className="form-control is-valid";
    } 

    if (!error) {
        return true;
    } else {
        return false;
    }
}

     
function checkName() {
    if (contactName.value == ""){
        document.getElementById("contactName").className = "form-control is-invalid";
        document.getElementById("errorName").innerHTML = "Imię i nazwisko jest wymagane";
        errorText += "Imię i nazwisko\n";
    } else {
        var nameRegex = /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/;
        if (nameRegex.test(contactName.value) == false) {
            document.getElementById("contactName").className = "form-control is-invalid";
            document.getElementById("errorName").innerHTML = "Imię i nazwisko może zawierać tylko litery";
            errorText += "Imię i nazwisko\n";
        } else {
            document.getElementById("contactName").className = "form-control is-valid";
        }
    }
}


function checkEmail() {
    if(contactEmail.value == ""){
        document.getElementById("contactEmail").className="form-control is-invalid";
        document.getElementById("errorEmail").innerHTML="Adres email jest wymagany";
        error=true;
    } else {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(contactEmail.value)==false) {
            document.getElementById("contactEmail").className="form-control is-invalid";
            document.getElementById("errorEmail").innerHTML="Podany adres email jest nieprawidłowy";
        } else {
            document.getElementById("contactEmail").className="form-control is-valid";
        } 
    }
}


function checkInformation() {
    if (information.value == ""){
        document.getElementById("information").className="form-control is-invalid";
        document.getElementById("errorInformation").innerHTML="Informacja jest wymagana";
    } else {
        document.getElementById("information").className="form-control is-valid";
    } 
}

















