// Obtener el formulario y escuchar el evento de envío
const form = document.querySelector("form");
form.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  event.preventDefault(); // Prevenir el envío real del formulario

  // Obtener los valores de los campos
  const nombreApellido = document.getElementById("nombreApellido").value;
  const dni = document.getElementById("dni").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validar que todos los campos estén completos
  if (!nombreApellido || !dni || !email || !telefono || !mensaje) {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  // Validar Nombre y Apellido (solo letras y espacios)
  if (!/^[A-Za-z\s]+$/.test(nombreApellido)) {
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
  const cuerpoMensaje = `Nombre y Apellido: ${nombreApellido}\nCorreo electrónico: ${email}\nMensaje: ${mensaje}`;

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
  document.getElementById("nombreApellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("mensaje").value = "";
}
