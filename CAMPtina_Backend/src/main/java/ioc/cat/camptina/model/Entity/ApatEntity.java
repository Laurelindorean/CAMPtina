/**
 * 
 */
package ioc.cat.camptina.model.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Creació de la entitat per a la taula Àpat
 */
@Entity
@Table(name = "APAT")
public class ApatEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID_APAT")
	private int id;

	@Column(name="NOM", nullable = false)
	private String nom;

	@Column(name="DESCRIPCIO", nullable = true)
	private String descripcio;

	@Column(name="ID_CATEGORIA", nullable = false)
	private int categoria;

	public ApatEntity() {

	}

	public ApatEntity(int id) {
		this.id = id;
	}

	public ApatEntity(String nom, String descripcio, int categoria) {
		this.nom = nom;
		this.descripcio = descripcio;
		this.categoria = categoria;
	}

	/*
	 * Setters i Getters
	 */
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescripcio() {
		return descripcio;
	}

	public void setDescripcio(String descripcio) {
		this.descripcio = descripcio;
	}

	public int getCategoria() {
		return categoria;
	}

	public void setCategoria(int categoria) {
		this.categoria = categoria;
	}

}
