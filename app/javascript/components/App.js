import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={("Welcome!")} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
