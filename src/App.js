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
import TranslateTable from './components/pages/adminTables/TranslateTable';
import AddEditTranslation from './components/pages/adminTables/AddEditTranslation';
import ViewTranslation from './components/pages/adminTables/ViewTranslation';

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
        <Route path='/translateTable' component={TranslateTable} />
        <Route path='/addTranslation' component={AddEditTranslation} />
        <Route path='/translate/update/:id' component={AddEditTranslation} />
        <Route path='/translate/view/:id' component={ViewTranslation} />

      </Switch>
    </Router>
  );
}

export default App;
