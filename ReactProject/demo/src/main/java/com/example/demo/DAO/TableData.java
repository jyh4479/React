package com.example.demo.DAO;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;

@Data
@AllArgsConstructor
public class TableData {
    private TableCol colList;
    private ArrayList rawList;
}