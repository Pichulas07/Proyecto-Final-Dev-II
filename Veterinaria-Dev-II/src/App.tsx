import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from './features/home/Home'
import Login from './features/Login/Login'
import Register from './features/Register/Register'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className="flex-grow flex items-center justify-center px-6">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
          </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
