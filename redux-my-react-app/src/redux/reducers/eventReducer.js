import {fromJS} from "immutable";

import actions from "../actions";

const initialState = fromJS({
  text:"인턴교육",
  color:"#666"
});

const eventReducer = (state = initialState,action)=>{
  switch(action.type){
    case actions.eventAction.SET_TEXT:
      return{
        text: action.text,
        color:action.color
      }
    default:
      return state;
  }
}
export default eventReducer;
