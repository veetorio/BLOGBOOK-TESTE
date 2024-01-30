

const value = document.getElementById('emailTxt');
const senha = document.getElementById('senhaTxt');

function validacaoEmail(emailTxt) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(emailTxt);
}
function validarTamanhoCampo(campo, min, max) {
    const tamanho = campo.length;
    return tamanho >= min && tamanho <= max;
}
function validarFormulario() {
   

    if (value.value == '') {
        alert('Por favor, insira um endereço de e-mail ou username válido.')
        return false;
    }
    if (!validarTamanhoCampo(senha.value, 1, 9)) {
        alert('A senha deve ter entre 1 e 8 caracteres.');
        return false;
    }

    return true; 
}

async function auth(){
    if(validarFormulario()){
        const user = {
            "dataSearchName" : value.value,
            "dataSearchPassword" : senha.value
        }
            const respo = await authUser(user)
            .then(promise => {
                if(promise.status == 404) alert(promise.message);
                if(promise.status == 401) alert(promise.message)

                console.log(promise);
            
            }) 
    }
}
async function authUser(obj){
    const header =
    { 
        headers: { "Content-Type": "application/json", 
        Accept: "application/json" },
        method: "POST",
        body : JSON.stringify(obj)
    }

        const enviar = await fetch('http://localhost:8080/authUser',header).then(promise => promise.json())
        return enviar

}

