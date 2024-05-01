import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const RoutesCP = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default RoutesCP
