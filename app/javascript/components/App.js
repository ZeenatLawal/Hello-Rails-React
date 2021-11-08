import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={("Welcome!")} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
