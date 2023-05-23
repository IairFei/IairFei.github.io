const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", function() {
    const digits = this.value.replace(/\D/g, "");
    const formatted = formatPhoneNumber(digits);
    displayPhoneNumber(formatted);
});

function formatPhoneNumber(value) {
    const digitArray = Array.from(value);
    let formattedNumber = "";

    for (let i = 0; i < digitArray.length; i++) {
        formattedNumber += digitArray[i];

        if (i === 1 || i === 5) {
            formattedNumber += "-";
        }
    }

    return formattedNumber;
}

function displayPhoneNumber(value) {
    phoneInput.value = value;
    phoneInput.setAttribute("size", value.length);
}



function validateForm1() {
  var nameInput = document.getElementById("nameInput")
  var emailInput = document.getElementById("emailInput");
  var phoneInput = document.getElementById("phoneInput");
  var name = nameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;
  
  if (name == "") {
    alert("Por favor, ingrese su nombre completo.");
    nameInput.value = "";
    nameInput.focus();
    return false;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    alert("Por favor, ingrese un email válido.");
    emailInput.value = "";
    emailInput.focus();
    return false;
  }
  
  if (!/^\d{2}-?\d{4}-?\d{4}$/.test(phone)) {
    alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
    phoneInput.value = "";
    phoneInput.focus();
    return false;
  }
  
  console.log("Nombre:", document.getElementById("nameInput").value);
  console.log("Email:", email);
  console.log("Teléfono:", phone);
  console.log("Mensaje:", document.getElementById("mensaje").value);
  console.log("Tipo de propiedad:", document.getElementById("tipo").value);
  console.log("Ubicación de la API de Google: https://maps.googleapis.com/maps/api/js?key=AIzaSyCfWTmCDJ81In4GdkBihq-FQrHTrbj0YFs&callback=iniciarMap");
  alert("¡Su información ha sido enviada con éxito!");
  window.location.reload();

  return true;
}


function iniciarMap(){
  var coord = {lat:-34.5956145 ,lng: -58.4431949};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 100,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
