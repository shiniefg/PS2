function voo(){
    window.location.href = "px2.html";
}

function vc(){
    window.location.href = "px2.html";
}

try {

    const form = document.querySelector("form");
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextarea = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    function validarFormulario(evento) {
        evento.preventDefault();

        let valido = true;

        if (!nomeInput || nomeInput.value.trim() === "") {
            valido = false;
            alert("O campo de nome não pode estar vazio.");
        }

        if (!mensagemTextarea || mensagemTextarea.value.trim() === "") {
            valido = false;
            alert("O motivo não pode estar vazio.");
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("A mensagem deve ter menos que 500 caracteres.");
        }

        if (valido && form) {
            alert("Agradecemos seu contato!");
            form.submit();
        }
    }

    if (enviarBtn) {
        enviarBtn.addEventListener("click", validarFormulario);
    }

} catch (exception) {
    console.log("Erro no ha.js:", exception.message);
}
