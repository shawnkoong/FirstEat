package com.firsteat.firsteat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.firsteat.firsteat.model.MenuCategory;
import com.firsteat.firsteat.repository.MenuCategoryRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MenuCategoryService {
    
    private final MenuCategoryRepository menuCategoryRepository;

    public MenuCategoryService(MenuCategoryRepository menuCategoryRepository) {
        this.menuCategoryRepository = menuCategoryRepository;
    }

    public MenuCategory getMenuCategory(Long id) {
        return menuCategoryRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
    }

    public List<MenuCategory> getAllMenuCategories(Long restaurantId) {
        return menuCategoryRepository.findByRestaurantId(restaurantId);
    }

    public void addMenuCategory(MenuCategory menuCategory) {
        menuCategoryRepository.save(menuCategory);
    }

    public void updateMenuCategory(MenuCategory menuCategory) {
        menuCategoryRepository.save(menuCategory);
    }

    public void deleteMenuCategory(Long id) {
        menuCategoryRepository.deleteById(id);
    }
}
