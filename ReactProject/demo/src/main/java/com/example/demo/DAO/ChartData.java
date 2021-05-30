package com.example.demo.DAO;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChartData {
    private String Date;
    private long price;
}