package com.esprit.microservices.projetstation.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Station implements Serializable {
    private static final long serialVersionUID=6;
    @Id
    @GeneratedValue
    private int idstation;
    private String nomstation, adresse;

    public int getIdstation() {
        return idstation;
    }


    public String getNomstation() {
        return nomstation;
    }

    public void setNomstation(String nomstation) {
        this.nomstation = nomstation;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public Station(){super();}
    public Station(String nomstation) {
        this.nomstation = nomstation;
    }

    public Station(String nomstation, String adresse) {
        this.nomstation = nomstation;
        this.adresse = adresse;
    }
}
