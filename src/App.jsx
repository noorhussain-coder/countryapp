
import CountryDetails from '../components/Layout/CountryDetails'
import About from '../components/Pages/About'
import Contact from '../components/Pages/Contact'
import Country from '../components/Pages/Country'
import ErrorPage from '../components/Pages/ErrorPage'
import Home from '../components/Pages/Home'
import Header from '../components/UI/Header'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {


  return (
    <>
  <BrowserRouter>
  <Header/>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route   path='/about' element={<About/>}/>
    <Route   path='/contact' element={<Contact/>}/>
    <Route   path='/country' element={<Country/>}/>
    <Route   path='/*' element={<ErrorPage/>}/>
    <Route   path='/country/:id' element={<CountryDetails/>}/>
  </Routes>
  
  
  </BrowserRouter>
    
    </>
  )
}

export default App
