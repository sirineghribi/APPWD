package com.esprit.bus.gestionbus.Controller;

import com.esprit.bus.gestionbus.Entity.Bus;
import com.esprit.bus.gestionbus.Service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus")
public class BusRestAPI {
    @Autowired
    private BusService busService;
    private String hello="hello , i'm the candidate MS";
    @RequestMapping("/hello")
    public String sayHello(){
        return hello;
    }

    @RequestMapping
    public List<Bus> getListBus(){
        return busService.getAll();
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Bus> createBus(@RequestBody Bus bus) {
        return new ResponseEntity<>(busService.addBus(bus), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Bus> updateBus(@PathVariable(value = "id") int id,
                                                   @RequestBody Bus bus){
        return new ResponseEntity<>(busService.updateBus(id, bus),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteBus(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(busService.deleteBus(id), HttpStatus.OK);
    }
}
