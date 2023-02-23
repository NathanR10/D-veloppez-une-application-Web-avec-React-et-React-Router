import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Lodging from '../pages/Lodging'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/App.css'

function AppRouter() {
  return (
    <Router>
      <div className="mainFrame">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Lodging />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default AppRouter
