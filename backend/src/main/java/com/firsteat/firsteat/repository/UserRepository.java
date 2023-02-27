package com.firsteat.firsteat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.firsteat.firsteat.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
    public Optional<User> findByUsername(String username);

}
