import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LanceForm from './pages/LanceForm';
import TeacherList from './pages/TeacherList';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/lances" component={TeacherList}/>
            <Route path="/fazer-lance" component={LanceForm}/>
        </BrowserRouter>
    );
}

export default Routes;