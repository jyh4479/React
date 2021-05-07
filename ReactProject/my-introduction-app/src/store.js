import {createStore} from 'redux';

import homeSectionData from "./Data/HomeSection.json";
import featureSectionData from "./Data/FeatureSection.json";
import aboutSectionData from "./Data/AboutSection.json";

export default createStore(function(state,action){
    if(state===undefined){
        return {
            /* --- HomeSection --- */
            homeSectionData:homeSectionData,

            /* --- AboutSection --- */
            aboutSectionData:aboutSectionData,

            /* --- FeatureSection --- */
            featureSectionData:featureSectionData,
        }
    }

    // if(action.type==='INCREMENT'){
    //     return {...state, number:state.number + action.size}
    // }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())