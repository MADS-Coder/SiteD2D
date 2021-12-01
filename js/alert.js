function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("form-nome");
    var email = document.getElementById("form-email");
    var telefone = document.getElementById("form-telefone");
  
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }

    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }

    if (telefone.value == "") {
      alert("Telefone não informado");
      telefone.focus();
      return;
    }

    alert("Dados enviado com sucesso!");
    // envia o formulário
    //formulario.submit();
}


//Formulario da pagina de contato.
function validar_contato() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }

  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }

  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return;
  }

  alert("Dados enviado com sucesso!");
  // envia o formulário
  //formulario.submit();
}




function validar_btn_experimentar() {
  var email = document.getElementById("form-email");

  if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
  }

  alert("Dados enviado com sucesso!");
}
