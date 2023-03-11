package com.firsteat.firsteat.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonProperty(access = Access.WRITE_ONLY)
    private User user; // owner/vendor

    private String photo; // could use java's url instead (?)

    // add latitude/longitude or somehow get it from the address
    // add rating
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MenuCategory> menu;
    
    @ElementCollection
    private List<String> cuisines;

    public Restaurant() {
        this.menu = new ArrayList<>();
        this.cuisines = new ArrayList<>();
    }

    public Restaurant(Long id) {
        super();
        this.id = id;
    }

    public Restaurant(Long id, String name, String address, Long userId) {
        super();
        this.id = id;
        this.name = name;
        this.address = address;
        this.user = new User(userId);
    }

    public Restaurant(String name, String address, Long userId, List<String> cuisines) {
        super();
        this.name = name;
        this.address = address;
        this.user = new User(userId);
        this.cuisines = cuisines;
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

    public String getPhoto() {
        return this.photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public List<MenuCategory> getMenu() {
        return this.menu;
    }

    public void setMenu(List<MenuCategory> menu) {
        this.menu = menu;
    }

    public List<String> getCuisines() {
        return this.cuisines;
    }

    public void setCuisines(List<String> cuisines) {
        this.cuisines = cuisines;
    }

}
