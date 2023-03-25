package com.firsteat.firsteat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.firsteat.firsteat.model.Item;
import com.firsteat.firsteat.service.ItemService;

@RestController
@RequestMapping("/api/items")
public class ItemController {
    
    @Autowired
    private ItemService itemService;

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItem(@PathVariable Long id) {
        Item item = itemService.getItem(id);
        return ResponseEntity.ok(item);
    }

    @PostMapping()
    public void addItem(@RequestBody Item item) {
        itemService.addItem(item);
    }

    @GetMapping()
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }
}
