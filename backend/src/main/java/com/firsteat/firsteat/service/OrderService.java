package com.firsteat.firsteat.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.firsteat.firsteat.model.Order;
import com.firsteat.firsteat.repository.OrderRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order getOrder(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public List<Order> getAllRestaurantOrders(Long restaurantId) {
        return orderRepository.findByRestaurantId(restaurantId);
    }

    public List<Order> getAllCustomerOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    /**
     * @param userId
     * @return List of 30 most recent orders
     */
    public List<Order> getRecentCustomerOrders(Long userId) {
        Pageable pageable = PageRequest.of(0, 30);
        return orderRepository.findFirst30ByUserIdOrderByTimestampDesc(userId, pageable);
    }

    public void addOrder(Order order) {
        order.timestampNow();
        order.setRestaurantInfo();
        orderRepository.save(order);
    }
    
}
