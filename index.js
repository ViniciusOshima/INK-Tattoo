let contador = 0

function burguer() {
  let abaBurguer = document.querySelector('.aba-burguer-fechado')
  contador++
  if (contador % 2 === 0) {
    abaBurguer.removeAttribute('id')
    abaBurguer.innerHTML = ' '
  } else {
    abaBurguer.setAttribute('id', 'aba-burguer')
    abaBurguer.innerHTML =
      '<h2>Login</h2> <h2>Sign up</h2> <h2>Help</h2> <h2>About</h2>'
  }
}
