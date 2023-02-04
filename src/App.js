import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './components/pages/Courses';
import Tests from './components/pages/Tests';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Examination from './components/pages/Examination';
import ProfessionalCourse from './components/pages/ProfessionalCourse';
import AdminPage from './components/pages/AdminPage';
import AddEdit from './components/pages/AddEdit';
import View from './components/pages/View';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/courses' component={Courses} />
        <Route path='/tests' component={Tests} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/examination' component={Examination} />
        <Route path='/profession' component={ProfessionalCourse} />
        <Route path='/adminPage' component={AdminPage} />
        <Route path='/addWord' component={AddEdit} />
        <Route path='/update/:id' component={AddEdit} />
        <Route path='/view/:id' component={View} />
      </Switch>
    </Router>
  );
}

export default App;
