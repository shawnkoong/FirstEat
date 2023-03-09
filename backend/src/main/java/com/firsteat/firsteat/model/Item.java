package com.firsteat.firsteat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Item {

    @Id
    private String name;
    private int price;
    private String imageURL;
    @ManyToOne
    private Restaurant restaurant;
    @ManyToOne
    private MenuCategory menuCategory;

    public Item() {
    }

    public Item(String name, int price, String imageURL, Long restaurantId, Long menuCategoryId) {
        super();
        this.name = name;
        this.price = price;
        this.imageURL = imageURL;
        this.restaurant = new Restaurant(restaurantId);
        this.menuCategory = new MenuCategory(restaurant);
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImageURL() {
        return this.imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Restaurant getRestaurant() {
        return this.restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public MenuCategory getMenuCategory() {
        return this.menuCategory;
    }

    public void setMenuCategory(MenuCategory menuCategory) {
        this.menuCategory = menuCategory;
    }

}
