package com.esprit.microservices.projetstation;

import com.esprit.microservices.projetstation.Entity.Station;
import com.esprit.microservices.projetstation.Repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
@EnableEurekaClient

@SpringBootApplication
public class ProjetStationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetStationApplication.class, args);
	}
	@Autowired
	private StationRepository stationRepository;
	@Bean
	ApplicationRunner init(){
		return (args)->{
			//save
			stationRepository.save(new Station("sirine","rueAndalous"));
			stationRepository.save(new Station("nassim","rueGhazella"));

			stationRepository.findAll().forEach(System.out::println);
		};
	}
}
