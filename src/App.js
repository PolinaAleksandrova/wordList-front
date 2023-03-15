import React from 'react';
import Navbar from './components/Navbar';
import SideNavbar from './components/Sidebar/SideNavbar';
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
import View from './components/pages/View';
import TranslateTable from './components/pages/adminTables/Translations/TranslateTable';
import AddEditTranslation from './components/pages/adminTables/Translations/AddEditTranslation';
import ViewTranslation from './components/pages/adminTables/Translations/ViewTranslation';
import AddEditAchievement from './components/pages/adminTables/Achievements/AddEditAchievement';
import AchievementTable from './components/pages/adminTables/Achievements/AchievementTable';
import ViewAchievement from './components/pages/adminTables/Achievements/ViewAchievement';
import AddEditWord from './components/pages/adminTables/Words/AddEditWord';
import WordTable from './components/pages/adminTables/Words/WordTable';
import ViewWord from './components/pages/adminTables/Words/ViewWord';
import QuizPage from './components/pages/QuizPage';
import FlashCardPage from './components/pages/FlashCardPage';
import MainCourses from './components/pages/mainCourses/MainCourses';
import Register from './components/pages/Authorization/Register';
import Login from './components/pages/Authorization/AuthForm';

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
      
        <Route path ='/login' component ={Login}/>
        <Route path ='/register' component ={Register}/>

        <Route path='/adminPage' component={AdminPage} />
        
        <Route path='/view/:id' component={View} />
        <Route path='/translateTable' component={TranslateTable} />
        <Route path='/addTranslation' component={AddEditTranslation} />
        <Route path='/translate/update/:id' component={AddEditTranslation} />
        <Route path='/translate/view/:id' component={ViewTranslation} />
        <Route path='/ac/view/:id' component={ViewTranslation} />
    
        <Route path='/achievementTable' exact component={AchievementTable} />
        <Route path='/addAchievement' exact component={AddEditAchievement} />
        <Route path='/achievement/update/:id' exact component={AddEditAchievement} />
        <Route path='/achievement/view/:id' exact component={ViewAchievement} />
     
        <Route path='/wordTable' component={WordTable} />
        <Route path='/addWord' component={AddEditWord} />
        <Route path='/word/update/:id' component={AddEditWord} />
        <Route path='/word/view/:id' component={ViewWord} />
        

        <Route path='/quizPage' component={QuizPage} />
        <Route path='/flashCards' component={FlashCardPage} />
        <Route path ='/mainCourses' component ={MainCourses}/>
        <AdminPage />
 
      </Switch>
      
    </Router>
  );
}

export default App;
