import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import { Route,Routes } from 'react-router-dom'



function App() {
  

  return (
    <>
    {/* react-router-dom */}
    <Header/>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/WatchHistory' element={<WatchHistory/>}/>
    </Routes>


    
     <Footer/>
    </>
  )
}

export default App
