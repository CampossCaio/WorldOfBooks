import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Logon from './Pages/Logon';
import Dashboard from './Pages/Dashboard';
import Book from './Pages/Book';
import Author from './Pages/Author';
import AuthorList from './Pages/Author/AuthorList';
import GenreList from './Pages/Genre/GenreList';
import Genre from './Pages/Genre';
import PublishingCompany from './Pages/PublishingCompany';
import PublishingCompanyList from './Pages/PublishingCompany/PublishingCompanyList';

export default function Routes() { 
   return(
       <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Logon}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/books" component={Book}/>
              <Route path="/author" exact component={Author}/>
              <Route path="/author/list" component={AuthorList}/>
              <Route path="/genres" exact component={Genre}/>
              <Route path="/genres/list" component={GenreList}/>
              <Route path="/publishingCompanys" exact component={PublishingCompany}/>
              <Route path="/publishingCompanys/list" component={PublishingCompanyList}/>
          </Switch>
       </BrowserRouter>
   )
}