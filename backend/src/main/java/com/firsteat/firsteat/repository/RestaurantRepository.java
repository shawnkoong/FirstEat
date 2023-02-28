package com.firsteat.firsteat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.firsteat.firsteat.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    
    public List<Restaurant> findByUserId(Long userId);
    
}
