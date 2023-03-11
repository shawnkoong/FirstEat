package com.firsteat.firsteat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.firsteat.firsteat.model.MenuCategory;
import com.firsteat.firsteat.service.MenuCategoryService;

@RestController
@RequestMapping("/api/menucategory")
public class MenuCategoryController {

    @Autowired
    private MenuCategoryService menuCategoryService;

    @GetMapping("/{id}") // /api/menuCategory?id=
    public MenuCategory getMenuCategory(@PathVariable Long id) {
        return menuCategoryService.getMenuCategory(id);
    }
    
    @GetMapping() // /api/menuCategory?restaurantId=
    public List<MenuCategory> getRestaurantMenuCategories(@RequestParam Long restaurantId) {
        return menuCategoryService.getAllMenuCategories(restaurantId);
    }

}
