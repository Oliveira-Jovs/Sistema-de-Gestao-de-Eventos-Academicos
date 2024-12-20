package br.edu.ifpe.gestaoacademica.entities;

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

@Table(name = "Transporte")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Transporte {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String categoria;
	private String placa;
	private String quilometragem;
	private String nomeMotorista;
	private String horaSaida;
	private String horaChegada;
	private boolean ativo;
	
	@OneToOne
	@JoinColumn(name = "idEvento")
	private Evento evento;
	
	@OneToOne
	@JoinColumn(name = "idServidor")
	private Servidor servidor;
	
	public void inativar() {
		this.ativo = false;
	}
}
