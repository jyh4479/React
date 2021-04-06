import React, {Component} from 'react';

class ComponentTest extends Component{
  render(){
    var lists=[];
    var data=this.props.data; //app에서 넘겨주는 data
    var i=0;
    while(i<data.length){
      lists.push(<li key={data[i].id} >{data[i].title} {data[i].desc}</li>);
      i=i+1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default ComponentTest; //외부에서 사용할 수 있도록 해주는 코드
