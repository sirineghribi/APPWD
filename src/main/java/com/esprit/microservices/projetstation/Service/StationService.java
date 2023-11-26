package com.esprit.microservices.projetstation.Service;

import com.esprit.microservices.projetstation.Entity.Station;
import com.esprit.microservices.projetstation.Repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service


public class StationService {
    @Autowired
    private StationRepository stationRepository;
    public Station addStation(Station s){
        return stationRepository.save(s);
    }
    public Station updateStation(int idStation, Station newstation){
        if(stationRepository.findById(idStation).isPresent())
        {
            Station existingStation= stationRepository.findById(idStation).get();
            existingStation.setNomstation(newstation.getNomstation());
            existingStation.setAdresse(newstation.getAdresse()
            );
            return stationRepository.save(existingStation);
        }else
            return null;

    }
    public String deleteStation(int idstation){
        if(stationRepository.findById(idstation).isPresent()) {
            stationRepository.deleteById(idstation);
            return "******station supprimée*****";

        }else return "station non supprimée";
    }
}
