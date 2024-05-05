import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import All from './components/All';
import Cybersecurity from './components/Cybersecurity'
import Datascience from './components/Datascience'
import Carrers from './components/Carrers'
import Full from './components/Full';
 

// console.log(data);
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/fullstack' element={<Full />} />
        <Route path='/cybersecurity' element={<Cybersecurity />} />
        <Route path='/datascience' element={<Datascience />} />
        <Route path='/carrers' element={<Carrers />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
