package com.firsteat.firsteat.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.firsteat.firsteat.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
    
    public List<Order> findByRestaurantId(Long restaurantId);
    
    public List<Order> findByUserId(Long userId);

    public List<Order> findFirst30ByUserIdOrderByTimestampDesc(Long userId, Pageable pageable);
    
}
