package com.example.grocerylistapp.repository;

import com.example.grocerylistapp.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemRepository extends MongoRepository<Item, String> {
    List<Item> findByCategory (String category);
}
