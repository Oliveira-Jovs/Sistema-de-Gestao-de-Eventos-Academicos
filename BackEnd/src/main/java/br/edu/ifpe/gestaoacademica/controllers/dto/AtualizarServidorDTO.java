package br.edu.ifpe.gestaoacademica.controllers.dto;

import br.edu.ifpe.gestaoacademica.entities.Banco;
import br.edu.ifpe.gestaoacademica.entities.Endereco;
import jakarta.validation.constraints.NotNull;

public record AtualizarServidorDTO(
		@NotNull
		Long id,
		String siape,
		String cargo,
		String nome,
		String cpf,
		String rg,
		String dataNasc,
		String telefone,
		String email,
		Endereco endereco,
		Banco banco) {
}