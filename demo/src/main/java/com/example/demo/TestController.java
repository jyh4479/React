package com.example.demo;

import com.example.demo.Menu.TopMenuContents;
import com.example.demo.Menu.TopMenuTitle;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class TestController {
    private static Logger logger = LogManager.getLogger(TestController.class);

    @GetMapping("/Hello")
    public String HelloWorldController() {
        logger.info("Request Testing for Axios");
        return "Hello World!";
    }

    @GetMapping("/json")
    public ArrayList<Member> jsonList() {
        return new ArrayList(Arrays.asList(
                new Member(1, "제목-test-1", "내용-test-1", new Date()),
                new Member(2, "제목-test-2", "내용-test-1", new Date()),
                new Member(3, "제목-test-3", "내용-test-1", new Date()),
                new Member(4, "제목-test-4", "내용-test-1", new Date()),
                new Member(5, "제목-test-5", "내용-test-1", new Date())
        ));
    }

    @GetMapping("/topMenu")
    public ArrayList<TopMenuTitle> TopMenuList() {
        logger.info("Request Testing for Axios");
        /* title의 세부 내용 */
        ArrayList<TopMenuContents> contents1 = new ArrayList(Arrays.asList(
                new TopMenuContents(0, "Content1-1"),
                new TopMenuContents(1, "Content1-2"),
                new TopMenuContents(2, "Content1-3"),
                new TopMenuContents(3, "Content1-4")
        ));
        ArrayList<TopMenuContents> contents2 = new ArrayList(Arrays.asList(
                new TopMenuContents(0, "Content2-1"),
                new TopMenuContents(1, "Content2-2"),
                new TopMenuContents(2, "Content2-3")
        ));
        ArrayList<TopMenuContents> contents3 = new ArrayList(Arrays.asList(
                new TopMenuContents(0, "Content3-1"),
                new TopMenuContents(1, "Content3-2"),
                new TopMenuContents(2, "Content3-3"),
                new TopMenuContents(3, "Content3-4")
        ));
        ArrayList<TopMenuContents> contents4 = new ArrayList(Arrays.asList(
                new TopMenuContents(0, "Content4-1"),
                new TopMenuContents(1, "Content4-2"),
                new TopMenuContents(2, "Content4-3"),
                new TopMenuContents(3, "Content4-4")
        ));
        ArrayList<TopMenuContents> contents5 = new ArrayList(Arrays.asList(
                new TopMenuContents(0, "Content5-1"),
                new TopMenuContents(1, "Content5-2")
        ));
        /* title의 세부 내용 */

        /* title의 주 내용 */
        return new ArrayList(Arrays.asList(
                new TopMenuTitle(0, "Menu1", contents1),
                new TopMenuTitle(1, "Menu2", contents2),
                new TopMenuTitle(2, "Menu3", contents3),
                new TopMenuTitle(3, "Menu4", contents4),
                new TopMenuTitle(4, "Menu5", contents5)
        ));
        /* title의 주 내용 */
    }
    @GetMapping("/Content1-1")
    public String content1_1() {
        return "This is content1-1";
    }
    @GetMapping("/Content2-1")
    public String content2_1() {
        return "This is content2-1";
    }
    @GetMapping("/Content3-1")
    public String content3_1() {
        return "This is content3-1";
    }
    @GetMapping("/Content1-2")
    public String content1_2() {
        return "This is content1-2";
    }
}