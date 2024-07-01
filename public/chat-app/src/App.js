import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Registered from "./pages/registered";
import Login from "./pages/login";
import Chat from "./pages/chat";


export default function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/registered" element={ <Registered /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/chat" element={ <Chat /> } />
  </Routes>
  </BrowserRouter> 
  );
}
