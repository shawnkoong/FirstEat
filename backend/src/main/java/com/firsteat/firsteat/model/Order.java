package com.firsteat.firsteat.model;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int totalPrice;
    @ManyToOne
    private Restaurant restaurant;
    @ElementCollection
    @CollectionTable(name = "ordered_items")
    private List<Item> itemsOrdered;
    @ElementCollection
    @CollectionTable(name = "ordered_quantities")
    private List<Integer> quantityOrdered;
    @ManyToOne
    private User user;
    
    public Order() {
    }

    public Order(Long id, Long restaurantId) {
        super();
        this.id = id;
        this.totalPrice = 0;
        this.restaurant = new Restaurant(restaurantId, "", "", 2L);
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Restaurant getRestaurant() {
        return this.restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Item> getItemsOrdered() {
        return this.itemsOrdered;
    }

    public void setItemsOrdered(List<Item> itemsOrdered) {
        this.itemsOrdered = itemsOrdered;
    }

    public List<Integer> getQuantityOrdered() {
        return this.quantityOrdered;
    }

    public void setQuantityOrdered(List<Integer> quantityOrdered) {
        this.quantityOrdered = quantityOrdered;
    }

}
