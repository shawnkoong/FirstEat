package com.firsteat.firsteat.model;

import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int totalPrice; // same as Item, can use BigDecimal

    @ManyToOne
    private Restaurant restaurant;

    @ManyToMany
    @JoinTable(
        name = "order_item", 
        joinColumns = @JoinColumn(name = "order_id"), 
        inverseJoinColumns = @JoinColumn(name = "item_id")
    )
    private List<Item> itemsOrdered;

    @ElementCollection
    @CollectionTable(name = "ordered_quantities")
    private List<Integer> quantityOrdered;

    @ManyToOne
    private User user;

    @JsonProperty(access = Access.WRITE_ONLY)
    private Instant timestamp;

    @Transient
    private ZonedDateTime clientTime;

    public Order() {
        this.itemsOrdered = new ArrayList<>();
        this.quantityOrdered = new ArrayList<>();
    }
    
    public Order(Long id, Long restaurantId) {
        super();
        this.id = id;
        this.totalPrice = 0;
        this.restaurant = new Restaurant(restaurantId);
    }

    public void timestampNow() {
        setTimestamp(Instant.now());
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
    
    public Instant getTimestamp() {
        return this.timestamp;
    }
    
    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public ZonedDateTime getClientTime() {
        return this.clientTime;
    }

    public void setClientTime(ZonedDateTime clientTime) {
        this.clientTime = clientTime;
    }
    
}
