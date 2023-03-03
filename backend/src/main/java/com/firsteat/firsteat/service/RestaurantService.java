package com.firsteat.firsteat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.firsteat.firsteat.model.Restaurant;
import com.firsteat.firsteat.repository.RestaurantRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class RestaurantService {
    
    @Autowired
    private RestaurantRepository restaurantRepository;

    public Restaurant getRestaurant(Long id) {
        return restaurantRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    // gets top 30 restaurants based on ratings (need to add sorting with rating)
    public List<Restaurant> getAllRestaurants() {
        Page<Restaurant> page = restaurantRepository.findAll(PageRequest.of(0, 30));
        return page.getContent();
    }

    // TODO: should also add a method to get 30 restaurants by coordinates

    //gets all restaurants for a particular vendor
    public List<Restaurant> getAllVendorRestaurants(Long userId) {
        return restaurantRepository.findByUserId(userId);
    }

    public void addRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }

    public void updateRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }

    public void deleteRestaurant(Long id) {
        restaurantRepository.deleteById(id);
    }
}
