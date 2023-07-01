import React from "react";
import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/book/Home";
import SaveForm from './pages/book/SaveForm';
import Detail from './pages/book/Detail';
import UpdateForm from './pages/book/UpdateForm';
import Login from './pages/user/Login';
import Join from './pages/user/Join';

function App() {
  return (
    <div>
        <Header/>
        <Container>
          <Routes>
            <Route path="/"           exact={true} element={<Home/>}/>
            <Route path="/saveForm"   exact={true} element={<SaveForm/>}/>
            <Route path="/book/:id"   exact={true} element={<Detail/>}/>
            <Route path="/updateForm" exact={true} element={<UpdateForm/>}/>

            <Route path="/loginFrom"  exact={true} element={<Login/>}/>
            <Route path="/joinFrom"   exact={true} element={<Join/>}/>         
          </Routes>
        </Container>
    </div>
  );
}

export default App;
