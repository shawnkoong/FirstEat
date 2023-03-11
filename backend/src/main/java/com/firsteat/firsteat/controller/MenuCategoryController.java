package com.firsteat.firsteat.controller;

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

import com.firsteat.firsteat.model.MenuCategory;
import com.firsteat.firsteat.service.MenuCategoryService;

@RestController
@RequestMapping("/api/menucategory")
public class MenuCategoryController {

    @Autowired
    private MenuCategoryService menuCategoryService;

    @GetMapping("/{id}")
    public ResponseEntity<MenuCategory> getMenuCategory(@PathVariable Long id) {
        MenuCategory menuCategory = menuCategoryService.getMenuCategory(id);
        return ResponseEntity.ok(menuCategory);
    }
    
    @GetMapping() // /api/menuCategory?restaurantId=
    public List<MenuCategory> getRestaurantMenuCategories(@RequestParam Long restaurantId) {
        return menuCategoryService.getAllMenuCategories(restaurantId);
    }

    @PostMapping()
    public void addMenuCategory(@RequestBody MenuCategory menuCategory) {
        menuCategoryService.addMenuCategory(menuCategory);
    }

}
