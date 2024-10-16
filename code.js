function Cadastro() {
  let email = document.getElementById("email-cadastro").value;
  let senha = document.getElementById("Senha-cadastro").value;

  localStorage.setItem("emailStorage", email);
  localStorage.setItem("senhaStorage", senha);

  alert("Cadastrado");
  window.location.href = 'login.html';
}
let emailSalvo = localStorage.getItem("emailStorage");
let senhaSalvo = localStorage.getItem("senhaStorage");

function Login() {
  let emailLogin = document.getElementById("email-login").value;
  let senhaLogin = document.getElementById("Senha-login").value;

  if (emailSalvo == emailLogin && senhaSalvo == senhaLogin) {
    alert("login bem sucedido");
  } else {
    alert("login mal sucedido");
  }

}
