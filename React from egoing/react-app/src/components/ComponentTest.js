import React, {Component} from 'react';

class ComponentTest extends Component{
  render(){
    return(
      <div>
        <header>
          <h2>This is ComponentTest</h2>
        </header>

        <body>
          <p>This is Test of Component</p>
        </body>
      </div>
    );
  }
}

export default ComponentTest; //외부에서 사용할 수 있도록 해주는 코드
