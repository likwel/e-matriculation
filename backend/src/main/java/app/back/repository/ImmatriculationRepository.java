package app.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.back.entity.Immatriculation;

@Repository
public interface ImmatriculationRepository extends JpaRepository<Immatriculation, Integer>{

}
