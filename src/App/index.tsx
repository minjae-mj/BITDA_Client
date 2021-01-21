import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import NavBar from './organisms/NavBar'; 
import Footer from './molecules/Footer';
import Landing from './pages/Landing'
import Main from './pages/Main/Main';
import MyPage from './pages/Mypage'; 
import DrinkDetail from './pages/DrinkDetail';
import Signin from './pages/Sign/Signin';
import Signup from './pages/Sign/Signup';
import {withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../reducers'; 


function App() {
  const state = useSelector((state: RootState) => state.signinReducer);

  return (
    <Router>
      <div>
      <NavBar isLogin={state.isLogin} />

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/users/signin">
           <Signin /> 
        </Route>
        <Route exact path="/users/signup">
          <Signup />
        </Route>
        <Route exact path="/drinks/list">
          <Main />
        </Route>
        <Route exact path="/drinks/detail/:drinkId">
          <DrinkDetail />
        </Route>
        <Route exact path="/users/mypage">
          <MyPage />
        </Route>
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default withRouter(App);


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
