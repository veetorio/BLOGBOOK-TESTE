

const email = document.getElementById('emailTxt');
const senha = document.getElementById('senhaTxt');
const usuario = document.getElementById('usernameTxt');

function validacaoEmail(emailTxt) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(emailTxt);
}
function validarTamanhoCampo(campo, min, max) {
    const tamanho = campo.length;
    return tamanho >= min && tamanho <= max;
}
function validarFormulario() {
   

    if (!validacaoEmail(email.value)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }
    if (!validarTamanhoCampo(senha.value, 1, 9)) {
        alert('A senha deve ter entre 1 e 8 caracteres.');
        return false;
    }
    if (!validarTamanhoCampo(usuario.value, 1, 16)) {
        alert('O usuário deve ter entre 1 e 15 caracteres.');
        document.getElementById('usernameTxt').value = "";
        return false;
    }

    return true; 
}

async function criarConta(){
    if(validarFormulario()){
        const user = {
            "nome_usuario": usuario.value,
            "email": email.value,
            "senha_usuario": senha.value}
            const respo = await post(user)
            if(respo.status === 401){
                alert(respo.message)
            }else{
                open('https://www.oracle.com/br/java/technologies/downloads/#jdk17-windows')
            }
    }else{
        console.log(-1);
        alert('incorreto')
    }

}



async function post(obj){
    const header =
    { 
        headers: { "Content-Type": "application/json", 
        Accept: "application/json" },
        method: "POST",
        body : JSON.stringify(obj)
    }

        const enviar = await fetch('http://localhost:8080/usuarios',header).then(promise => promise.json())
        return enviar

}