import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-grow px-6 py-8'>
          <Routes>
            <Route path='/'/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
