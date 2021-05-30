package com.example.demo;

import com.example.demo.DAO.*;
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

    @GetMapping("/TableData")
    public TableData TestTableData() {

        TableCol testData = new TableCol("기간", "총납부금액", "사용요금", "요금할인", "미납 및 연체", "결제대행 수수료", "기준환율", "10원미만할인", "부가세전금액", "부가세", "예치금사용");
        ArrayList<TableRaw> testData2 = new ArrayList(Arrays.asList(
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0),
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0),
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0),
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0),
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0),
                new TableRaw("2021년 04월", 7732516, 6925680, 0, 0, 103885, 1119.3, 5, 7029560, 702956, 0)
        ));

        return new TableData(testData,testData2);
    }

    @GetMapping("/BarChartData")
    public ArrayList TestChartData() {
        return new ArrayList(Arrays.asList(
                new ChartData("2019년 08월", 7732516),
                new ChartData("2019년 09월", 3515754),
                new ChartData("2019년 10월", 10515754),
                new ChartData("2019년 12월", 3266835),
                new ChartData("2020년 01월", 3892845),
                new ChartData("2020년 02월", 1572945),
                new ChartData("2020년 04월", 3515754),
                new ChartData("2020년 05월", 7732516),
                new ChartData("2020년 06월", 3266835),
                new ChartData("2020년 07월", 3892845),
                new ChartData("2020년 08월", 1572945),
                new ChartData("2020년 09월", 3892845),
                new ChartData("2020년 10월", 1572945),
                new ChartData("2020년 11월", 3515754),
                new ChartData("2020년 12월", 7732516),
                new ChartData("2021년 01월", 3266835),
                new ChartData("2021년 03월", 1572945),
                new ChartData("2021년 04월", 3515754),
                new ChartData("2021년 05월", 7732516),
                new ChartData("2021년 06월", 3266835),
                new ChartData("2021년 07월", 3892845),
                new ChartData("2021년 08월", 1572945)
        ));
    }

    @GetMapping("/DoughnutChartData")
    public ArrayList TestChartData2() {
        return new ArrayList(Arrays.asList(
                new ChartData("API Gateway", 25),
                new ChartData("EC2 Container Service", 25),
                new ChartData("S3", 10),
                new ChartData("Route 53", 27),
                new ChartData("MQ", 13)
        ));
    }

    @GetMapping("/CardData")
    public ArrayList TestCardData() {
        return new ArrayList(Arrays.asList(
                new CardData("납부금액", "2021년 4월 총 납부금액", 1343716),
                new CardData("사용요금", "상품 사용요금", 1205157),
                new CardData("요금할인", "할인", 0),
                new CardData("결제대행 수수료", "외국환 결제대행 수수료", 16412),
                new CardData("부가세", "총요금액의 10%", 122156),
                new CardData("예치금", "예치금 사용금액", 0)
        ));
    }

















































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