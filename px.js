function voo() {
    window.location.href = "px2.html";
}

function vc() {
    window.location.href = "px2.html";
}

try {
    const form = document.querySelector("form");
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#Assunto"); // tava errado
    const mensagemTextarea = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;

        if (nomeInput.value.trim() === "") {
            valido = false;
            alert("O campo de nome não pode estar vazio");
        }

        if (mensagemTextarea.value.trim() === "") {
            valido = false;
            alert("O motivo não pode estar vazio");
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("A mensagem deve ter menos que 500 caracteres");
        }

        if (valido) {
            alert("Agradecemos seu contato!");
            form.submit();
        }
    }

    enviarBtn.addEventListener("click", validarFormulario);

} catch (error) {
    console.log(error.message);
}