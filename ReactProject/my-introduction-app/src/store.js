import {createStore} from 'redux';
export default createStore(function(state,action){
    if(state===undefined){
        return {
            /* --- HomeSection --- */
            homeMessage:"Welcome to My Page",
            homeContent:`This is a page to introduce the developer Yong-hoon!`,

            /* --- AboutSection --- */
        }
    }
    if(action.type==='INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())