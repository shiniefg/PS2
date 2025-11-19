const url = "http://jsonplaceholder.typicode.com/todos/1";
const output = document.getElementById("output");
const status = document.getElementById("status");
function setLoading(on) {
    status.innerHTML  = on
    ? 'Carregamento <span class="spiner" aria-hidden="true"></span>'
    : "";
}

document
.getElementById("btn-fetch")
.addEventListener("click", async () => {
    output.textContent = "";
    setLoading(true);
    try{

        const res = await fetch(url, { method: "GET" })
        if (!res.ok) throw new Error("status HTTP: " + res.status);
        const data = await res.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        output.textContent = "Erro: " + err.message;
        output.classList.add("error");
    } finally {
        setLoading(false);
    }
});