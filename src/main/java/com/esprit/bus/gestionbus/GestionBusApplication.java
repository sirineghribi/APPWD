package com.esprit.bus.gestionbus;

import com.esprit.bus.gestionbus.Entity.Bus;
import com.esprit.bus.gestionbus.Repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class GestionBusApplication {

    public static void main(String[] args) {
        SpringApplication.run(GestionBusApplication.class, args);
    }
    @Autowired
    private BusRepository repository;
    @Bean
    ApplicationRunner init(){
        return (args)->{
            //save
            repository.save(new Bus("109TUN9999",20,"iveco"));
            repository.save(new Bus("201TUN5555",35,"mercedes"));
            repository.save(new Bus("188TUN6666",40,"fiat"));
            repository.findAll().forEach(System.out::println);
        };
    }

}
