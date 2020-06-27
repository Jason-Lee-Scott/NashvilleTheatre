import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// import FirebaseApp from '../helpers/utilities/connection';
import Navbar from '../components/shared/Navbar/Navbar';
import SearchResults from '../components/pages/SearchResults/SearchResults';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import Category from '../components/pages/Category/Category';
import Show from '../components/pages/Show/Show';
import Theatre from '../components/pages/Theatre/Theatre';
import Venue from '../components/pages/Venue/Venue';
import Account from '../components/pages/Account/Account';
import Footer from '../components/shared/Footer/Footer';
import './App.scss';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

// FirebaseApp();

class App extends React.Component {

  state = {
    authed: false,
  };

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <PublicRoute path="/" exact component={Home} authed={authed} />
            <PublicRoute path="/search/:searchTerm" exact component={SearchResults} authed={authed} />
            <PublicRoute path="/login" exact component={Login} authed={authed} />
            <PublicRoute path="/register" exact component={Register} authed={authed} />
            <PublicRoute path="/category/:categoryId" exact component={Category} authed={authed} />
            <PublicRoute path="/show/:showId" exact component={Show} authed={authed} />
            <PublicRoute path="/theatre/:theatreId" exact component={Theatre} authed={authed} />
            <PublicRoute path="/venue:venueId" exact component={Venue} authed={authed} />
            <PublicRoute path="/account" component={Account} authed={authed} />
            {/* <PrivateRoute path="/theatre/:theatreId/show/new" exact component={ShowForm} />
            <PrivateRoute path="/theatre/:theatreId/show/:showId/edit" exact component={ShowForm} /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
