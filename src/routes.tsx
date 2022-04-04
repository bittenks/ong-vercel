import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import PetList from "./pages/PetList";
import PetForm from "./pages/PetForm";
import PetCrud from "./pages/PetsCrudList"
import Login from "./pages/Login";
import Help from "./pages/Help";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/cadastrar"  component={Login} />
      <Route path="/adotar" component={PetList} />
      <Route path="/adm" component={PetCrud} />
      <Route path="/ajudar" component={Help}/>

    </BrowserRouter>
  );
}

export default Routes;
