package app.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.back.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
