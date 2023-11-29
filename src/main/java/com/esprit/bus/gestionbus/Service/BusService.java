package com.esprit.bus.gestionbus.Service;

import com.esprit.bus.gestionbus.Entity.Bus;
import com.esprit.bus.gestionbus.Repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;
    public Bus addBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> getAll(){
        return busRepository.findAll();
    }
    public Bus updateBus(int id, Bus newBus) {
        if (busRepository.findById(id).isPresent()) {
            Bus existingCandidat = busRepository.findById(id).get();
            existingCandidat.setMatricule(newBus.getMatricule());
            existingCandidat.setNbrPlaces(newBus.getNbrPlaces());
            existingCandidat.setMarque(newBus.getMarque());
            return busRepository.save(existingCandidat);
        } else
            return null;
    }

    public String deleteBus(int id) {
        if (busRepository.findById(id).isPresent()) {
            busRepository.deleteById(id);
            return "bus supprimé";
        } else
            return "bus non supprimé";
    }
}
