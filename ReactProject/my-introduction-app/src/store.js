import {createStore} from 'redux';

import homeSectionData from "./Data/HomeSection.json";
import featureSectionData from "./Data/FeatureSection.json";
import aboutSectionData from "./Data/AboutSection.json";
import serviceSectionData from "./Data/ServiceSection.json";
import teamSectionData from "./Data/TeamSection.json";
import portfolioSectionData from "./Data/PortfolioSection.json";
import chooseSectionData from "./Data/ChooseSection.json";
import footerSectionData from "./Data/FooterSection.json";

export default createStore(function(state,action){
    if(state===undefined){
        return {
            /* --- HomeSection --- */
            homeSectionData:homeSectionData,

            /* --- AboutSection --- */
            aboutSectionData:aboutSectionData,

            /* --- FeatureSection --- */
            featureSectionData:featureSectionData,

            /* --- ServiceSection --- */
            serviceSectionData:serviceSectionData,

            /* --- TeamSection ---*/
            teamSectionData:teamSectionData,

            /* --- PortfolioSection ---*/
            portfolioSectionData:portfolioSectionData,

            chooseSectionData:chooseSectionData,

            footerSectionData:footerSectionData
        }
    }

    // if(action.type==='INCREMENT'){
    //     return {...state, number:state.number + action.size}
    // }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())