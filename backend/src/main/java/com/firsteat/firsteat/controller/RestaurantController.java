package com.firsteat.firsteat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.firsteat.firsteat.model.Restaurant;
import com.firsteat.firsteat.service.RestaurantService;


@RestController
@CrossOrigin
@RequestMapping("/api/restaurants")
public class RestaurantController {
    
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    // change the address
    @PostMapping("/")
    public void addRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.addRestaurant(restaurant);
    }

    // change address based on changes to addRestaurant
    @PutMapping("/{id}")
    public void updateRestaurant(@RequestBody Restaurant restaurant, @PathVariable Long id) {
        restaurantService.updateRestaurant(restaurant);
    }

}
