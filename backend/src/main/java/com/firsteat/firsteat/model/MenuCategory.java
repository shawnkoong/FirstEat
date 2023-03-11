package com.firsteat.firsteat.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class MenuCategory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    @JsonProperty(access = Access.WRITE_ONLY)
    private Restaurant restaurant;

    @JsonManagedReference
    @OneToMany(mappedBy = "menuCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;

    public MenuCategory() {
        this.items = new ArrayList<>();
    }

    public MenuCategory(String name, Long restaurantId) {
        super();
        this.name = name;
        this.restaurant = new Restaurant(restaurantId);
    }

    // public MenuCategory(String name, Long restaurantId, List<Item> items) {
    //     this.name = name;
    //     this.restaurant = new Restaurant(restaurantId);
    //     this.items = items;
    //     for (Item item : items) {
    //         item.setMenuCategory(this);
    //     }
    // }

    public MenuCategory(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Restaurant getRestaurant() {
        return this.restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public List<Item> getItems() {
        return this.items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
