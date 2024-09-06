package app.back.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "immatriculation")
public class Immatriculation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	public Integer id;
	
	@Column(name="numero",length=200)
	public String numero;
	
	@Column(name="createdAt",length=200)
	public String createdAt;
	
	@Column(name="status",length=200)
	public String status;
	
	@Column(name="expiration",length=200)
	public String expiration;
	
	@Column(name="commentaire",length=200)
	public String commentaire;
	
	public Integer getId() {
		return id;
	}
	public Immatriculation setId(Integer id) {
		this.id = id;
		return this;
	}
	public String getNumero() {
		return numero;
	}
	public Immatriculation setNumero(String numero) {
		this.numero = numero;
		return this;
	}
	public String getCreatedAt() {
		return createdAt;
	}
	public Immatriculation setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
		return this;
	}
	public String getStatus() {
		return status;
	}
	public Immatriculation setStatus(String status) {
		this.status = status;
		return this;
	}
	public String getExpiration() {
		return expiration;
	}
	public Immatriculation setExpiration(String expiration) {
		this.expiration = expiration;
		return this;
	}
	
	public String getCommentaire() {
		return commentaire;
	}
	public Immatriculation setCommentaire(String commentaire) {
		this.commentaire = commentaire;
		return this;
	}
}
