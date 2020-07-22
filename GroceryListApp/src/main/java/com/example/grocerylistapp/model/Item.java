package com.example.grocerylistapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "items")
public class Item {

    @Id
    private String id;
    private String category;
    @Field("item")
    private String itemName;

    public Item() {

    }

    public Item(String category, String itemName) {
        this.category = category;
        this.itemName = itemName;
    }

    public String getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
}
