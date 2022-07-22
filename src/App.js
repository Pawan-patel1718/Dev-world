import React from "react";
import ReactRouter from "./Router/ReactRouter";
import { BrowserRouter } from "react-router-dom";

// import CovidDetail from "./Components/CovidDetail";
// import Axios from "./Components/Axios";
// import PostRequest from "./Components/PostRequest";
// import CovidDetail from "./Components/CovidDetail";
// import Bootstrap from "./Bootstrap";
// import ToDoList from "./ToDoList";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

export default function App() {
  return (
    <>
      {/* <ToDoList /> */}
      {/* <Bootstrap /> */}
      {/* <CovidDetail /> */}
      {/* <PostRequest /> */}
      {/* <Axios /> */}
      <BrowserRouter>
        <ReactRouter />
      </BrowserRouter>
    </>
  );
}
