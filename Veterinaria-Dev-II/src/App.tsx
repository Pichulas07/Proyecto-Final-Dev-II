import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Home from './features/home/Home'
import Pets from './features/pets/Pets'
import PetDetails from './features/pets/PetDetails'
import User from './features/user/user'
import EditProfile from './features/user/EditProfile'
import NotFound from './shared/NotFound'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col bg-gradient-to-t from-white-500 to-blue-300'>
          <Header />
          <main className="flex-grow ">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/profile' element={<User />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/pets/:name" element={<PetDetails/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
