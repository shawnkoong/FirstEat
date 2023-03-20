package com.firsteat.firsteat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.firsteat.firsteat.model.Order;
import com.firsteat.firsteat.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        Order order = orderService.getOrder(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping()
    public void processOrder(@RequestBody Order order) {
        order.timestampNow();
        orderService.addOrder(order);
    }

    // method to get all of a user's orders
    // need to get time zone information from client
    @GetMapping("/user/${userId}")
    public List<Order> getUserOrders(@PathVariable Long userId, @RequestParam("timeZone") String timeZone) {
        return orderService.getAllCustomerOrders(userId, timeZone);
    }

    // method to get all of a restaurant's orders
    @GetMapping()
    public List<Order> getRestaurantOrders() {
        return new ArrayList<>();
    }
}
