package com.esprit.microservices.projetstation.Controller;

import com.esprit.microservices.projetstation.Entity.Station;
import com.esprit.microservices.projetstation.Service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("station")
public class StationRestAPI {
    @Autowired
    private StationService stationService;
    @PostMapping("/addstation")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Station> createStation(@RequestBody Station station){
        return new ResponseEntity<>(stationService.addStation(station),HttpStatus.OK
        );
    }
    @PutMapping("/update/{idstation}")
    @ResponseStatus(HttpStatus.OK)
    public  ResponseEntity<Station> updateStation(@PathVariable(value = "idstation")int idStation,@RequestBody Station station)
    {
        return new ResponseEntity<>(stationService.updateStation(idStation,station),HttpStatus.OK);

    }
    @DeleteMapping("/delete/{idstation}")
    @ResponseStatus(HttpStatus.OK)

    public ResponseEntity<String> deleteStation(@PathVariable(value = "idstation")int idStation){
        return new ResponseEntity<>(stationService.deleteStation(idStation),HttpStatus.OK);
    }
    @GetMapping("/getAll")
    public Iterable<Station> getAll()
    {
        return stationService.getAll();
    }

}
