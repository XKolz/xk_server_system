//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';


//styled components
import {StyledContainer} from './components/Styles';

//Loader css
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import{
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
} from 'react-router-dom';

//auth
//import AuthRoute from './components/AuthRoute';
//import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux';

function App({checked}) {
  return (
    <Router>
      {checked && (
    <StyledContainer>
      <Routes>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </StyledContainer>
)}
    </Router>
  );
}

const mapStateToProps = ({session}) => ({
  checked: session.checked,
})

export default connect(mapStateToProps)(App);

/*
THis works for older react-router-dom
<Routes>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/" element={<Home/>} />
      </Routes>
*/