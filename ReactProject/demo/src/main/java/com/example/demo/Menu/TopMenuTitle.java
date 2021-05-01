package com.example.demo.Menu;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.ArrayList;

@Data
@AllArgsConstructor
public class TopMenuTitle {
    private long id;
    private String title;
    private ArrayList<TopMenuContents> contents;

}
