package br.edu.ifpe.gestaoacademica.entities;

import br.edu.ifpe.gestaoacademica.entities.enums.Turno;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Matricula")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Matricula {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String numMatricula;
	private String periodoIngresso;
	private Turno turno;
	private boolean ativo;

	@OneToOne
	@JoinColumn(name = "idAluno")
	private Aluno aluno;

	@OneToOne
	@JoinColumn(name = "idCurso")
	private Curso curso;

	public void inativar() {
		this.ativo = false;
	}
}