import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Top from './Top';
import About from './About';
import Staff from './Staff';
import Achievement from './Achievement';
import Activity from './Activity';
import Creation from './Creation';
import Contact from './Contact';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import StaffList from './Admin/StaffManagement/StaffList';
import StaffAdd from './Admin/StaffManagement/StaffAdd';
import StaffEdit from './Admin/StaffManagement/StaffEdit';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App(){
    return(
        <BrowserRouter>
            <GlobalNav />
            <Switch>
                <Route exact path="/">
                    <Top />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/staff">
                    <Staff />
                </Route>
                <Route path="/achievement">
                    <Achievement />
                </Route>
                <Route path="/activity">
                    <Activity />
                </Route>
                <Route path="/creation">
                    <Creation />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/stafflist">
                    <StaffList />
                </Route>
                <Route path="/staffadd">
                    <StaffAdd />
                </Route>
                <Route path="/staffedit">
                    <StaffEdit />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

if (document.getElementById('nav')) {
    ReactDOM.render(<App />, document.getElementById('nav'));
}