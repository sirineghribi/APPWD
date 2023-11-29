package com.esprit.bus.gestionbus.Repository;

import com.esprit.bus.gestionbus.Entity.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BusRepository extends JpaRepository<Bus,Integer> {

    @Query("select b from Bus b where b.matricule like :matricule")
    public Page<Bus> busByMatricule(@Param("matricule") String m, Pageable pageable);
}
