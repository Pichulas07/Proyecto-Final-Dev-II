import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from './features/home/Home'
import Login from './features/Login/Login'
import Register from './features/Register/Register'
import Pets from './features/pets/Pets'
import PetDetails from './features/pets/PetDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col bg-gradient-to-t from-white-500 to-blue-300'>
          <Header />
          <main className="flex-grow ">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/pets' element={<Pets />} />
            <Route path="/pets/:name" element={<PetDetails/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
