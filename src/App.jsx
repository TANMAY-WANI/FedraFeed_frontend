import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PgOne from './Pages/PgOne'
import PgTwo from './Pages/PgTwo'
const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<PgOne/>}/>
      <Route exact path='/Home' element={<PgTwo/>}/>
    </Routes>
  </Router>

)

export default App