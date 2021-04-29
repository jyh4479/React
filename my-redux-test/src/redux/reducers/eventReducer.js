import {fromJS} from "immutable";

import actions from "../actions";

const initialState = fromJS({
  text:"인턴교육"
});

const eventReducer = (state = initialState,action)=>{
  switch(action.type){
    case actions.eventAction.SET_TEXT:
    return{
      text: action.text
    }
    default:
    return state;
  }
}
export default eventReducer;
