//Criando os objetos dos elementos de texto do form
var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");

// Event listeners
nome.addEventListener('focusout', validarNome);
ano.addEventListener('focusout', validarAno);
email.addEventListener('focusout', validarEmail);
senha.addEventListener('focusout', validarSenha);

// Função para validar o nome do usuário
function validarNome(e) {
    const regexNome = /^[a-zA-Záéíóúâêîôûãõç\s]{6,}$/;
    const nomeTrimado = e.target.value.trim();

    if (!nomeTrimado.match(regexNome)) {
        nomeHelp.textContent = "O nome deve conter apenas letras e ter pelo menos 6 caracteres.";
        nomeHelp.style.color = "red";
    } else {
        nomeHelp.textContent = "";
    }
}

// Função para validar o ano de nascimento
function validarAno(e) {
    const regexAno = /^(19[0-9]{2}|20[0-1][0-9]|2020|2021|2022)$/; // Ajustado para aceitar anos entre 1900 e 2022
    const anoTrimado = e.target.value.trim();

    if (!anoTrimado.match(regexAno)) {
        anoHelp.textContent = "O ano de nascimento deve estar entre 1900 e 2022.";
        anoHelp.style.color = "red";
    } else {
        anoHelp.textContent = "";
    }
}

// Função para validar o email
function validarEmail() {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|br|net|org)$/;

    if (!regexEmail.test(email.value.trim())) {
        emailHelp.textContent = "O email inserido não está em um formato válido.";
        emailHelp.style.color = "red";
    } else {
        emailHelp.textContent = "";
    }
}

// Função para validar a senha
function validarSenha() {
    const senhaValue = senha.value.trim();
    const nomeValue = nome.value.trim();
    const anoValue = ano.value.trim();

    // Requisitos para uma senha válida
    const hasSpecialChar = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;
    const hasNumber = /\d+/;
    const hasUppercase = /[A-Z]+/;
    
    // Verifica se a senha contém o nome ou o ano de nascimento do usuário
    if (senhaValue.includes(nomeValue) || senhaValue.includes(anoValue)) {
        senhaHelp.textContent = "Senha inválida: não deve conter o nome ou o ano de nascimento.";
        senhaHelp.style.color = "red";
        return;
    }

    // Verifica o comprimento da senha e se atende aos requisitos mínimos
    if (senhaValue.length < 6 || senhaValue.length > 20 || !hasSpecialChar.test(senhaValue) || !hasNumber.test(senhaValue) || !hasUppercase.test(senhaValue)) {
        senhaHelp.textContent = "Senha inválida: deve ter entre 6 e 20 caracteres, conter pelo menos um caractere especial, um número e uma letra maiúscula.";
        senhaHelp.style.color = "red";
        return;
    }

    // Verifica a força da senha e retorna o nível de segurança
    if (senhaValue.length < 8) {
        senhaHelp.textContent = "Fraca";
        senhaHelp.style.color = "red";
    } else if (senhaValue.length <= 12) {
        senhaHelp.textContent = "Moderada";
        senhaHelp.style.color = "orange";
    } else {
        senhaHelp.textContent = "Forte";
        senhaHelp.style.color = "green";
    }
}