import React from 'react';
import {Routes, Route} from "react-router-dom";
import MyLayout from "./common/components/MyLayout";
import NotFoundPage from "./common/components/NotFoundPage";
import Repositories from "./features/repos";
import Users from "./features/users";
import Welcome from "./features/welcome/components/Welcome";
import RepositoryDetails from "./features/repos/components/RepositoryDetails";
import UserDetails from "./features/users/components/UserDetails";
import Analytics from "./features/analitics";

function App() {

  return (
    <Routes>
      <Route path='/' element={<MyLayout/>}>
        <Route path='*' element={<NotFoundPage/>}/>

        <Route path='/' element={<Welcome/>}/>

        <Route path='/repositories'>
          <Route index element={<Repositories/>}/>
          <Route path=':fullName1/:fullName2' element={<RepositoryDetails/>}/>
        </Route>

        <Route path='/users'>
          <Route index element={<Users/>}/>
          <Route path=':fullName' element={<UserDetails/>}/>
        </Route>

        <Route path={'/analytics'} element={<Analytics/>}>
        </Route>

      </Route>
    </Routes>
  );
};

export default App;
