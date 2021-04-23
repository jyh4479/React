import React, {Component} from 'react';

//TopBanner
import TopBanner from '../Components/TopBanner/TopBanner';

//TopMenu
import TopMenu from '../Components/TopMenu/TopMenu';
import TopMenuData from '../Components/TopMenu/TopMenuData';

//MainContainer
import MainContainer from '../Components/MainContainer/MainContainer';

//Footer
import Footer from '../Components/Footer/Footer';

//QuickMenu
import QuickMenu from '../Components/QuickMenu/QuickMenu';


class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      MainContentKey:"초기값"
    }
  }
  render(){
    return(
      <div>
        <TopBanner/>

        <TopMenu dataList={TopMenuData}
          onChangeContent={function(contentName){
            this.setState({MainContentKey:contentName});
          }.bind(this)}
        ></TopMenu>

        <MainContainer/>
        <Footer/>
        <QuickMenu/>
      </div>
    )
  }
}
export default HomePage;
