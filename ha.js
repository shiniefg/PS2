function voo(){
    window.location.href = "px2.html"
}
function vc(){
    window.location.href = "px2.html"
}


try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("assunto");
    const mensagemTexteare = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    function validarFormulario(evento){
        evento.preventDefault();
        if (nomeInput.value.trim() === ""){
            valido = false;
            alert("o campo de nome não pode esta vazio");
    }
    if (mensagemTexteare.value.trim() === '') {
        valido = false;
        alert("o motivo não pode esta vazio");
    } else if (mensagemTexteare.value.trim().length > 500) {
        valido = false;
        alert("a mensagem deve ter menos que 500 caracteres");
    }
    if (valido) {
        alert ("Agradeçemos seu contato");
        form.submit();
    }
}

  enviarBtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message);
}
