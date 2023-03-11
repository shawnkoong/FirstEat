package com.firsteat.firsteat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.firsteat.firsteat.model.Item;

public interface ItemRepository extends JpaRepository<Item, String> {

    public List<Item> findByMenuCategoryId(Long menuCategoryId);

}
