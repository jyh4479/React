import React, {Component} from "react";

class AddNumber extends Component{
    state={size:1}
    render(){
        return(
            <div>
                <h1>Add Number</h1>
                <input type="button"value="+" onClick={function(){

                    this.props.onClick(this.state.size);
                    // store.dispatch({type:'INCREMENT', size:this.state.size}) //종속성을 제거하면서 store의 의존성을
                    // container component에게 맡김 --> 온전히 view에만 집중할 수 있다.

                }.bind(this)}
                ></input>

                <input type="text" value={this.state.size} onChange={function(e){
                this.setState({size:Number(e.target.value)});
                }.bind(this)}
                ></input>
            </div>
        )
    }
}
export default AddNumber;