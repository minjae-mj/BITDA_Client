import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import NavBar from './organisms/NavBar'; 
import Footer from './molecules/Footer';
import Landing from './pages/Landing'
import Main from './pages/Main/Main';

function App() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
  <Router>
    <div>
     <NavBar isLogin={isLogin} />

     <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/users/signin">
        로그인 페이지
      </Route>
      <Route exact path="/users/signup">
        회원가입 페이지
      </Route>
      <Route exact path="/drinks/list">
        <Main />
      </Route>
      <Route exact path="/drinks/detail/:drinkId">
        개별 술 페이지
      </Route>
      <Route exact path="/users/mypage">
        마이 페이지
      </Route>
     </Switch>

     <Footer />
   </div>
  </Router>
  
  );
}

export default App;


// ref
/*
<Router>
<div>
  <nav
    style={{
      listStyleType: "none",
      padding: 0,
      backgroundColor: "lightsteelblue",
      height: "200px",
      color: "purple",
    }}
  >
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/drinks/list">Main</Link>
      </li>
      <li>
        <Link to="/users/signin">Sign in</Link>
      </li>
      <li>
        <Link to="/users/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/users/mypage">My page</Link>
      </li>
      <li>
        <Link to="/users/signout">Signout</Link>
      </li>
    </ul>
  </nav>

  <Switch>
    <Route exact path="/">
      Landing Page!!!
    </Route>
    <Route exact path="/drinks/list">
      <Main />
    </Route>
    <Route exact path="/users/signin">
      SignIn Page!!!
    </Route>
    <Route exact path="/users/signup">
      SignUp Page!!!
    </Route>
    <Route exact path="/users/mypage">
      Mypage!!!
    </Route>
    <Route exact path="/users/signout">
      Signout Page!!!
    </Route>
    {/* nav 에 드러나진 않지만, 이 라우트로 이동 가능 */
    /*
    <Route exact path="/drinks/detail/:drinkId">
      <DrinkDetail />
    </Route>
  </Switch>
</div>

<footer
  style={{
    listStyleType: "none",
    padding: 0,
    backgroundColor: "lightsalmon",
    height: "300px",
  }}
>
  footer
</footer>
</Router>

*/
