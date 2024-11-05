// Funçao para cadastrar um aluno
document.getElementById("submit-banco").addEventListener("click", async () => {
    try {
        // Coleta dados do banco
        const bancoData = {
            nomeBanco: document.getElementById("nomeBanco").value,
            numConta: document.getElementById("numConta").value,
            agencia: document.getElementById("agencia").value,
            operacao: document.getElementById("operacao").value
        };

        // Envia dados do banco
        const bancoResponse = await fetch("http://localhost:8080/bancos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bancoData)
        });

        if (!bancoResponse.ok) throw new Error("Erro ao salvar banco.");
        const banco = await bancoResponse.json();
        const bancoId = banco.id;

        alert("Banco salvo com sucesso!");

        // Armazena o ID do banco no armazenamento local para uso posterior
        localStorage.setItem("bancoId", bancoId);
    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar banco. Tente novamente.");
    }
});

document.getElementById("submit-endereco").addEventListener("click", async () => {
    try {
        // Coleta dados do endereço
        const enderecoData = {
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            cep: document.getElementById("cep").value,
            complemento: document.getElementById("complemento").value
        };

        // Envia dados do endereço
        const enderecoResponse = await fetch("http://localhost:8080/enderecos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enderecoData)
        });

        if (!enderecoResponse.ok) throw new Error("Erro ao salvar endereço.");
        const endereco = await enderecoResponse.json();
        const enderecoId = endereco.id;

        alert("Endereço salvo com sucesso!");

        // Armazena o ID do endereço no armazenamento local para uso posterior
        localStorage.setItem("enderecoId", enderecoId);
    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar endereço. Tente novamente.");
    }
});

document.getElementById("submit-aluno").addEventListener("click", async () => {
    try {
        // Coleta dados do aluno
        const alunoData = {
            nome: document.getElementById("nome-aluno").value,
            cpf: document.getElementById("cpf").value,
            rg: document.getElementById("rg").value,
            dataNasc: document.getElementById("dataNasc").value,
            telefone: document.getElementById("telefone").value,
            email: document.getElementById("email").value,
            matricula: document.getElementById("matricula").value,
            banco: { id: localStorage.getItem("bancoId") },  // ID do banco
            endereco: { id: localStorage.getItem("enderecoId") }  // ID do endereço
        };

        // Envia dados do aluno
        const alunoResponse = await fetch("http://localhost:8080/alunos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alunoData)
        });

        if (!alunoResponse.ok) throw new Error("Erro ao salvar aluno.");
        alert("Aluno cadastrado com sucesso!");

        // Limpa os IDs do armazenamento local
        localStorage.removeItem("bancoId");
        localStorage.removeItem("enderecoId");
    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar aluno. Tente novamente.");
    }
});
