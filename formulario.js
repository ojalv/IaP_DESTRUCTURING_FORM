const form = document.getElementById("user_form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    name: { value: name },
    lastname: { value: lastname },
    email: { value: email },
    phone: { value: phone },
  } = form.elements;
  alert(
    `Nombre:${name}\nApellido:${lastname}\nNombre:${email}\nNombre:${phone}\n`
  );
});
