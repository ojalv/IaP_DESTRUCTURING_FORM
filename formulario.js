const form = document.getElementById("user_form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    name: { value: name },
    lastname: { value: lastname },
    email: { value: email },
    phone: { value: phone },
  } = form.elements;

  form.style.display = "none";
  document.getElementById("body").innerHTML += `<div class="modal">
	<h2>Envio exitoso!</h2>
	<p>La siguiente informacion ha sido registrada</p>
	<div class="user-info">
	<span>Nombre:${name}</span>
	<span>Apellido:${lastname}</span>
	<span>Correo Electronico:${email}</span>
	<span>Numero de telefono:${phone}</span>
	</div>
	</div>`;
});
