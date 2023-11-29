package com.esprit.bus.gestionbus.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Bus {
    @Id
    @GeneratedValue
    private int id;
    private int nbrPlaces;
    private String marque ,matricule;

    public int getId() {
        return id;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public int getNbrPlaces() {
        return nbrPlaces;
    }

    public void setNbrPlaces(int nbrPlaces) {
        this.nbrPlaces = nbrPlaces;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public Bus() {
    }

    public Bus(String matricule, int nbrPlaces, String marque) {
        this.matricule = matricule;
        this.nbrPlaces = nbrPlaces;
        this.marque = marque;
    }
}
