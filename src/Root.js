
import React from 'react';
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from "react-router-dom";
import App from './App.js';
import SingleNote from './components/Note/SingleNote'
import Notes from './components/allNotes/Notes'
import {createTheme, ThemeProvider} from '@material-ui/core/';
import { purple, orange } from '@material-ui/core/colors';
import Layout from './components/Layout/Layout.js';

const theme1 = createTheme({
  palette:{
    primary: orange,
    secondary: orange
  },
  typography:{
      fontFamily: 'Domine'
  }

})


const Root = (props) => (
    <ThemeProvider theme = {theme1}>
    <Router>
        <Layout>
        <Switch>
            <Route path="/" exact>
                <Notes />
            </Route>
            <Route path="/singlenote">
                <SingleNote />
            </Route>
        </Switch> 
        </Layout>
    </Router>
    </ThemeProvider>
);


export default Root;