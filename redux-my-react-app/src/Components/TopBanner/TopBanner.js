import React, {Component} from 'react';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Etc from './Etc/Etc';
import './TopBanner.css';


import eventReducer from "../../redux/reducers/eventReducer";
import action from "../../redux/actions";
import {connect} from 'react-redux';
import { toJS } from 'immutable'

class TopBanner extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    // let color=this.props.store.eventReducer.color;
    // console.log(color+" check ")
    const reduxColor = this.props.eventReducerState.color || '교육'
    console.log(reduxColor.color)

    const colorStyle={
      backgroundColor: reduxColor.color
    }

    return(
      <div className="TopBanner">
        <Logo></Logo>
        <SearchBar></SearchBar>
        <Etc></Etc>
      </div>
    )
  }
}

const fromJsStateToProps = (state) => {
    const eventReducer = state.eventReducer;
    return {
        eventReducerState: eventReducer
    };
}

const fromJsDispatchToProps = dispatch => ({
    // onChangeText: () => dispatch(action.eventAction.setText({text:'교육끝'})),
    // onChangeText2: () => dispatch(action.eventAction.setText({text:'교육'})),
});


export default connect(fromJsStateToProps, fromJsDispatchToProps)(TopBanner);


// const mapReduxStateToReactProps=(state)=>{
//   const eventReducer=state.eventReducer;
//   return{
//     eventReducerState:eventReducer
//   };
// }
//
// const mapReduxDispatchToReactProps=dispatch=>({
// });
//
// export default connect(mapReduxStateToReactProps,mapReduxDispatchToReactProps)(TopBanner);
