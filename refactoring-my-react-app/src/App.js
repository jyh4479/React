import React from 'react';

import About from './About';
import Home from './Home';
import {Route, Link} from 'react-router-dom';

//exact를 쓰면서 다른 주소에 "/"가 포함되어 있어도 해당 컴포넌트가 출력되지 않음

//Router를 사용하는 이유는 기존 a태그의 href를 사용하면서 모두 리로드하는 것을 대신해서 바뀐 화면만 보여주고싶은것
//-->그래서 href로 Link를 걸지 않는다
function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
      </div>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;
