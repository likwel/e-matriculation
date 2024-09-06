package app.back.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicule")
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    public Integer id;

    @Column(name="immatriculation",length=200)
    public String immatriculation;
    
    @Column(name="type",length=200)
    public String type;
    
    @Column(name="modele",length=200)
    public String modele;
    
    @Column(name="year",length=200)
    public String year;
    
    @Column(name="chassis",length=200)
    public String chassis;
    
    @Column(name="carburant",length=200)
    public String carburant;
    
    @Column(name="color",length=200)
    public String color;
    
    @Column(name="datecirculation",length=200)
    public String datecirculation;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getChassis() {
        return chassis;
    }

    public void setChassis(String chassis) {
        this.chassis = chassis;
    }

    public String getCarburant() {
        return carburant;
    }

    public void setCarburant(String carburant) {
        this.carburant = carburant;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDatecirculation() {
        return datecirculation;
    }

    public void setDatecirculation(String datecirculation) {
        this.datecirculation = datecirculation;
    }

}
