import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './organisms/NavBar';
import Footer from './molecules/Footer';
import Landing from './pages/Landing';
import Main from './pages/Main/Main';
import MyPage from './pages/Mypage';
import DrinkDetail from './pages/DrinkDetail';
import Signin from './pages/Sign/Signin';
import Signup from './pages/Sign/Signup';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />

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
          <Route path="/users/mypage/:subpage">
            <MyPage />
          </Route>
          <Route exact path="/*">
            <Landing />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
