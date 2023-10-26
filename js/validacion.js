// Obtener el formulario y escuchar el evento de envío
const form = document.querySelector("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault(); // Prevenir el envío real del formulario

  // Obtener los valores de los campos
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const dni = document.getElementById("dni").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validar que todos los campos estén completos
  if (!nombres || !apellidos || !dni || !email || !telefono || !mensaje) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  //VALIDACION DE ESPACIOS EN BLANCO EMAIL!
  function email(input) {
    var emailValue = input.value;
    if (/\s/.test(emailValue)) {
    document.getElementById("emailError").textContent = "El email no debe contener espacios en blanco.";
    input.setCustomValidity("El email no debe contener espacios en blanco.");
      } else {
      document.getElementById("emailError").textContent = "";
      input.setCustomValidity("");
      }

  // Validar Nombres (solo letras y espacios)
  if (!/^[A-Za-z\s]+$/.test(nombres)) {
    alert("Por favor, ingrese un Nombre y Apellido válidos.");
    return;
  }

  // Validar Apellidos (solo letras y espacios)
  if (!/^[A-Za-z\s]+$/.test(apellidos)) {
    alert("Por favor, ingrese un Nombre y Apellido válidos.");
    return;
  }

  // Validar DNI (solo números)
  if (!/^[0-9]+$/.test(dni)) {
    alert("Por favor, ingrese un DNI válido (solo números).");
    return;
  }

  // Validar Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // Validar Teléfono (solo números)
  if (!/^[0-9]+$/.test(telefono)) {
    alert("Por favor, ingrese un número de teléfono válido (solo números).");
    return;
  }

  // Si todo está correcto, puedes proceder con el envío del formulario u otras acciones
  // Construir el cuerpo del mensaje
  const cuerpoMensaje = `Nombres: ${nombres}\nApellidos: ${apellidos}\nCorreo electrónico: ${email}\nMensaje: ${mensaje}`;

  // Enviar el correo usando Formspree
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xpzgkwqd", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`message=${cuerpoMensaje}`);
  alert("¡El mensaje ha sido enviado correctamente!");
  resetearCampos(); // Limpiar los campos
}

function resetearCampos() {
  // Limpiar los campos estableciendo su valor como vacío
  document.getElementById("nombres").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("mensaje").value = "";
}

}