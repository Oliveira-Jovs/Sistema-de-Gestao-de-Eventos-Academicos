package br.edu.ifpe.gestaoacademica.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Servidor")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Servidor extends Usuario {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String siape;
	private String cargo;
	private boolean ativo;
	
	public void inativar() {
		this.ativo = false;
	}
	
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "idTransporte")
	private Transporte transporte;
}
