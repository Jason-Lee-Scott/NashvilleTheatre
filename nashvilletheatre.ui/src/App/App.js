import React from 'react';
import firebase from 'firebase';
import FirebaseApp from '../helpers/utilities/connection';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import SearchResults from '../components/pages/SearchResults/SearchResults';
import Navbar from '../components/shared/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import Category from '../components/pages/Category/Category';
import Show from '../components/pages/Show/Show';
import Theatre from '../components/pages/Theatre/Theatre';
import Venue from '../components/pages/Venue/Venue';
import Account from '../components/pages/Account/Account';
import Footer from '../components/shared/Footer/Footer';
import SellerDashboard from '../components/pages/SellerDashboard/SellerDashboard';
import Cart from '../components/pages/Cart/Cart';
import './App.scss';

// was able to remove this because a public route
// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

FirebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  };


  handleAuthChange(authed) {
    this.setState({authed: authed});
  }

  // componentWillUnmount() {
  //   this.removeListener();
  // };

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar handleAuth={this.handleAuthChange} />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} authed={authed} />
            <Route path="/login" exact component={Login} authed={authed} handleAuth={this.handleAuthChange} />
            <Route path="/register" exact component={Register} authed={authed} />
            <Route path="/category/:categoryId" exact component={Category} authed={authed} />
            <Route path="/show/:showId" exact component={Show} authed={authed} />
            <Route path="/theatre/:theatreId" exact component={Theatre} authed={authed} />
            <Route path="/venue:venueId" exact component={Venue} authed={authed} />
            <Route path="/account/theatreco" component={SellerDashboard} authed={authed} />
            <PrivateRoute path="/account" component={Account} authed={authed} handleAuth={this.handleAuthChange} />
            <Route path="/search/:searchTerm" exact component={SearchResults} authed={authed} />
            <Route path="/cart/:uid" exact component={Cart} authed={authed} />
            {/* <PrivateRoute path="/theatre/:theatreId/show/new" exact component={ShowForm} />
            <PrivateRoute path="/theatre/:theatreId/show/:showId/edit" exact component={ShowForm} /> */}
          </Switch>
        </div>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
