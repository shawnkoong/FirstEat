package com.firsteat.firsteat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    @ManyToOne
    private User user;

    public Restaurant() {
    }

    public Restaurant(Long id, String name, String address, Long userId) {
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.user = new User(userId, "", "", "");
    }

    public Restaurant(String name, String address, Long userId) {
        super();
        this.name = name;
        this.address = address;
        this.user = new User(userId, "", "", "");
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

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
