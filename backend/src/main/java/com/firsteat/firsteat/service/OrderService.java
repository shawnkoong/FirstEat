package com.firsteat.firsteat.service;

import java.util.List;

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

    public List<Order> getAllCustomeOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }
    
}
