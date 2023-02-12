import React, {useState, useEffect} from 'react';
import {Link, Switch} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../AdminPage.css';

import SideNavbar from "../Sidebar/SideNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WordTable from './adminTables/Words/WordTable';
import TranslateTable from '../pages/adminTables/Translations/TranslateTable';
import AchievementTable from '../pages/adminTables/Achievements/AchievementTable';

function AdminPage() {
  return (
    <Router>
      <SideNavbar />
      <Switch>
      <Route exact path="/wordTable" component={ WordTable } />
      <Route exact path="/translateTable" component={ TranslateTable } />
      <Route exact path="/achievementTable" component={ AchievementTable } />
      </Switch>
    </Router>
  );
}








export default AdminPage;