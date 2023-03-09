package com.firsteat.firsteat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.firsteat.firsteat.model.Item;
import com.firsteat.firsteat.repository.ItemRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ItemService {
    
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
    
    public Item getItem(String name) {
        return itemRepository.findById(name).orElseThrow(() -> new EntityNotFoundException());
    }

    public List<Item> getAllItems(Long restaurantId) {
        return itemRepository.findByRestaurantId(restaurantId);
    }

    public void addItem(Item item) {
        itemRepository.save(item);
    }

    public void updateItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(String name) {
        itemRepository.deleteById(name);
    }

}
