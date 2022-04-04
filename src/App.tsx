import React from "react";
import "./assets/styles/global.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return( 
    <>
  <ToastContainer autoClose={3000} />
  <Routes />
  </>

  )
}

export default App;
