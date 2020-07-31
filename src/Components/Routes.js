import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import SurveyP from '../Pages/Survey';
import Home from '../Pages/Home';

export default () => (
    <div >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact={true} path="/survey" component={Home}/>
        <Route path="/surveypage" component={SurveyP}/>
      </BrowserRouter>
    </div>
  )