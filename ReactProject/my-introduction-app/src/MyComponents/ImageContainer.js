import React,{useState,useEffect} from "react";
import MessageBox from "./MessageBox";
import ImageBox from "./ImageBox";

import './ImageContainer.css';
/*

useState
useEffect
useMemo

*/
const ImageContainer = props =>{
    let dataList=props.dataList;
    let viewData = [];

    dataList.forEach((data) => {
        viewData.push(
            <div className="col-xs-6">
                <div className="features_item_text item-location">
                    <ImageBox addClassName={props.imageShape} imagePath={data.imagePath}></ImageBox>
                    <div className={"m-top-10"}>
                        <MessageBox addClassName={`text-black containerText ${props.textShape}`} message={data.message}></MessageBox>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>{viewData}</>
    )
}
export default ImageContainer;

/*

for ...in

for ...of

forEach



        for(let value of dataList){
            testData.push(
                <div className="col-xs-6">
                    <div className="features_item_text item-location">
                        <ImageCircle imagePath={value.imagePath}></ImageCircle>
                        <MessageBox type={'content'} textColor={'text-black'} message={value.message}></MessageBox>
                    </div>
                </div>
            )
        }

        for(let prop in dataList){
            console.log(prop)
            testData2.push(
                <div className="col-xs-6">
                    <div className="features_item_text item-location">
                        <ImageCircle imagePath={dataList[prop].imagePath}></ImageCircle>\n' +
                        '                        <MessageBox type={\'content\'} textColor={\'text-black'} message={dataList[prop].message}></MessageBox>
                    </div>
                </div>
            )
        }

*/