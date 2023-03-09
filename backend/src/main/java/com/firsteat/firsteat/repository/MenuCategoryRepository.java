package com.firsteat.firsteat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.firsteat.firsteat.model.MenuCategory;

public interface MenuCategoryRepository extends JpaRepository<MenuCategory, Long> {
    
    public List<MenuCategory> findByRestaurantId(Long restaurantId);
}
