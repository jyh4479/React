import React, {Component} from 'react';

class ComponentTest extends Component{
  render(){
    var lists=[];
    var content=this.props.content;
    var data=this.props.data; //app에서 넘겨주는 data
    var i=0;
    while(i<data.length){
      //data-id로 e속성 dataset.id에 id가 저장됨
      lists.push(<li key={data[i].id} ><a href="/" data-id={data[i].id} onClick={function(e){
        //debugger;
        e.preventDefault();
        this.props.onChangeContent(e.target.dataset.id);
      }.bind(this)}>{data[i].title}</a></li>);
      i=i+1;
    }
    // ------------------- bind를 이용한 방법 -------------------
    // while(i<data.length){
    //   lists.push(<li key={data[i].id} ><a href="/" data-id={data[i].id} onClick={function(id,e){
    //     //debugger;
    //     e.preventDefault();
    //     this.props.onChangeContent(id);
    //   }.bind(this,data[i].id)}>{data[i].title}</a></li>);
    //   i=i+1;
    // }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
        <p>{content}</p>
      </nav>
    );
  }
}

export default ComponentTest; //외부에서 사용할 수 있도록 해주는 코드
