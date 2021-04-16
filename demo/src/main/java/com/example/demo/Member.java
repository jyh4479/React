package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class Member {
    private long id;
    private String title;
    private String content;
    private Date date;
}
