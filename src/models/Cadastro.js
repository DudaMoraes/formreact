function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" }
  } else {
    return { valido: true, texto: "" }
  }

}

function validarSenha(senha) {
  let min = 4;
  let max = 30;
  if (senha.length < min || senha.length > max) {
    return { valido: false, texto: `Senha deve ter de ${min} à ${max} dígitos.` }
  } else {
    return { valido: true, texto: "" }
  }
}

export { validarCPF, validarSenha };