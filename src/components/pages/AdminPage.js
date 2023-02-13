import React, {useState, useEffect} from 'react';
import {Link, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../AdminPage.css';

import SideNavbar from "../Sidebar/SideNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WordTable from './adminTables/Words/WordTable';
import TranslateTable from '../pages/adminTables/Translations/TranslateTable';
import AchievementTable from '../pages/adminTables/Achievements/AchievementTable';
import AddEditTranslation from './adminTables/Translations/AddEditTranslation';
import ViewTranslation from './adminTables/Translations/ViewTranslation';
import AddEditAchievement from './adminTables/Achievements/AddEditAchievement';
import ViewAchievement from './adminTables/Achievements/ViewAchievement';
import AddEditWord from './adminTables/Words/AddEditWord';
import ViewWord from './adminTables/Words/ViewWord';
import View from './View';
import Dropdown from '../Dropdown';

function AdminPage() {

  return (
    <Router>
      <SideNavbar />

      <Switch>
      <Route exact path="/wordTable" component={ WordTable } />
      <Route exact path="/translateTable" component={ TranslateTable } />
      <Route exact path="/achievementTable" component={ AchievementTable } />

      <Route path='/view/:id' component={View} />
        <Route path='/translateTable' component={TranslateTable} />
        <Route path='/addTranslation' component={AddEditTranslation} />
        <Route path='/translate/update/:id' component={AddEditTranslation} />
        <Route path='/translate/view/:id' component={ViewTranslation} />
        <Route path='/ac/view/:id' component={ViewTranslation} />
    
        <Route path='/achievementTable' component={AchievementTable} />
        <Route path='/addAchievement' component={AddEditAchievement} />
        <Route path='/achievement/update/:id' component={AddEditAchievement} />
        <Route path='/achievement/view/:id' component={ViewAchievement} />
     
        <Route path='/wordTable' component={WordTable} />
        <Route path='/addWord' component={AddEditWord} />
        <Route path='/word/update/:id' component={AddEditWord} />
        <Route path='/word/view/:id' component={ViewWord} />

        
      </Switch>
    </Router>
  );
}








export default AdminPage;