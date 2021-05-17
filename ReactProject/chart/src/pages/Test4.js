import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2'

const labelData=[10,20,30,40,50,60,70,80,90,100];
const dummyData1=[65, 59, 70, 81, 56, 55, 40 ,55, 75 ,37];
const dummyData2=[80, 45, 77, 43, 64, 72, 65 ,78, 49 ,60];

const Test4 = () =>{

    /* dataView logic */
    const [chartData, setChartData] = useState();
    const [viewCount, setViewCount] = useState(labelData.length);
    const [options, setOptions] = useState(
        {
            responsive: true,
            maintainAspectRatio: false,
//tooltips 사용시
            tooltips: {
                enabled: true,
                mode: "nearest",
                position: "average",
                intersect: false,
            },
            scales: {
                xAxes: [
                    {
                        //   position: "top", //default는 bottom
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Step",
                            fontFamily: "Montserrat",
                            fontColor: "black",
                        },
                        ticks: {
                            // beginAtZero: true,
                            maxTicksLimit: 10, //x축에 표시할 최대 눈금 수
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        //   padding: 10,
                        scaleLabel: {
                            display: true,
                            labelString: "Coverage",
                            fontFamily: "Montserrat",
                            fontColor: "black",
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 20,
                            min: 0,
                            max: 100,
                            //y축 scale 값에 % 붙이기 위해 사용
                            callback: function (value) {
                                return value + "%";
                            },
                        },
                    },
                ],
            },
        }
    );
    const [legend, setLegend] = useState(
        {
            display: true,
            labels: {
                fontColor: "black",
            },
            position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
        }
    );

    const addCount = () =>{
        setViewCount(viewCount+1);
    }
    const subCount = () =>{
        setViewCount(viewCount-1);
    }

    const changeChartData = count =>{

        let testLabel=labelData.slice(0,count);
        let testData1=dummyData1.slice(0,count);
        let testData2=dummyData2.slice(0,count);

        setChartData(
            {
                labels: testLabel,

                datasets: [
                    //원소 1
                    {
                        label: "Classes",
                        data: testData1,
                        lineTension: 0,
                        backgroundColor: "rgba(15, 107, 255, 0.1)",
                        borderWidth: 1,
                        borderColor: "#0f6bff",
                        fill: true,
                    },
                    //원소2
                    {
                        label: "Methods",
                        data: testData2,
                        lineTension: 0,
                        backgroundColor: "rgba(242, 184, 113, 0.1)",
                        borderWidth: 1,
                        borderColor: "#f2b471",
                        fill: true,
                    },
                ],
            }
        );
    }





    useEffect(()=>{
        changeChartData(viewCount);
        console.log(viewCount);
    },[viewCount]);

    /* dataView logic */






    return(
        <div style={{width:'100%', height:500}}>
            <Line data={chartData} legend={legend} options={options}/>
            <button onClick={subCount}> sub button </button>
            <button onClick={addCount}> add button </button>
        </div>
    );
};

export default Test4;
