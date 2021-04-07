function validateDocument(document) {
  if (document.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 digitos" }
  } else {
    return { valid: true, text: "" }
  }

}

function validatePassword(password) {
  let min = 4;
  let max = 30;
  if (password.length < min || password.length > max) {
    return { valid: false, text: `Senha deve ter de ${min} à ${max} dígitos.` }
  } else {
    return { valid: true, text: "" }
  }
}

export { validateDocument, validatePassword };