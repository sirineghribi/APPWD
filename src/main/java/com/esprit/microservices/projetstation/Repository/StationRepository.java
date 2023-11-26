package com.esprit.microservices.projetstation.Repository;

import com.esprit.microservices.projetstation.Entity.Station;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StationRepository extends JpaRepository<Station,Integer> {
    @Query("select c from Station c where c.nomstation like :name")
    public Page<Station> StationByNom(@Param("name") String n, Pageable pageable);
}
