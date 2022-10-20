import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "../src/components/News"

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
