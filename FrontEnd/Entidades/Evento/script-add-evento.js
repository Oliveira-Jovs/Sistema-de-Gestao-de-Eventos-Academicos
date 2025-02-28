// Função para criar eventos
const IdUsuario = localStorage.getItem('userIdUsuario');

const userId = parseInt(IdUsuario);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-event");
    const saveButton = document.querySelector(".btn");

    saveButton.addEventListener("click", (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;
        const data = document.getElementById("data").value;
        const local = document.getElementById("local").value;
        const tipo = document.getElementById("tipo").value;

        // Criação do objeto com os dados do evento
        const eventoData = {
            nome: nome,
            descricao: descricao,
            data: data,
            local: local,
            tipo: tipo,
            servidor: { id: userId }
   
        };

        // Envia os dados para a API
        fetch("http://localhost:8080/eventos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(eventoData),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Evento criado com sucesso!");
                    window.location.href = "lista-evento-para-servidor.html";

                } else {
                    throw new Error("Erro ao criar o evento");
                }
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Erro ao criar o evento.");
            });
    });
});


// Função para obter eventos
async function getEventos() {
    try {
        const response = await fetch("http://localhost:8080/eventos", 
            {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Authorization": localStorage.getItem("token")
            }});
        if (!response.ok) {
            throw new Error(`Erro ao buscar eventos: ${response.status}`);
        }
        const eventos = await response.json();
        return eventos;
    } catch (error) {
        console.error(error);
        alert("Erro ao carregar eventos. Tente novamente mais tarde.");
        return [];
    }
}
