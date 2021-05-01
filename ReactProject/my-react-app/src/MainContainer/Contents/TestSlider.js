import React, {Component} from 'react';
import DataList3 from './data3.json';
import './TestSlider.css';

class TestSlider extends Component{
  constructor(props){
    super(props);
    this.state={
      infoIndex:0
    }
  }

  render(){
    var dataList=DataList3;
    var viewCount=4;
    var viewList=[];

    var i=this.state.infoIndex;
    var point=this.state.infoIndex;

    if(i<0){
      i=i+dataList.length
      point=i
    }
    for(;i<point+viewCount;i++){
      viewList.push(dataList[i%dataList.length]);
    }

    return(
        <div className="TestSlider">
          <ul className="testLocation">
            {viewList.map(data=> <li className="imageLocation">
                <div>
                  {data.id}
                </div>
                <div>
                  <img src={data.image}></img>
                </div>
                <div>
                  {data.title}
                </div>
                <div>
                  {data.price}
                </div>
              </li>)}
          </ul>
          <div>

            <button onClick={()=>{
              this.setState({infoIndex:(this.state.infoIndex-1)%dataList.length});
            }}>이전</button>

            <button onClick={()=>{
              this.setState({infoIndex:(this.state.infoIndex+1)%dataList.length});
            }}>다음</button>

          </div>
        </div>
    )
  }
}
export default TestSlider;
