 // Função chamada quando o formulário é enviado
    function validarFormulario() {
    // Obtém os valores dos campos "Nome" e "E-mail"
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    // Verifica se o campo "Nome" está vazio
    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false; // Impede o envio do formulário
    }

    // Verifica se o campo "E-mail" está vazio
    if (email.trim() === '') {
        alert('Por favor, preencha o campo E-mail.');
        return false; // Impede o envio do formulário
    }

    if (telefone.trim() === '') {
        alert('Por favor, preencha o campo Telefone.');
        return false; // Impede o envio do formulário
    }


    // Outras validações podem ser adicionadas aqui (por exemplo, formato de e-mail)

    return true; // Permite o envio do formulário se todos os campos estiverem preenchidos
}