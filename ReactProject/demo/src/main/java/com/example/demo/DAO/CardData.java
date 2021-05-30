package com.example.demo.DAO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CardData {
    private String Title;
    private String SubTitle;
    private long price;
}
