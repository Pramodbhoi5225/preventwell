import React from 'react'
import Navbar1 from './Componts/Navbar1'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Componts/RouterLink/Home'
import About from './Componts/RouterLink/About'
import ContactUs from './Componts/RouterLink/ContactUs'
import BroucherDounload from './Componts/RouterLink/BroucherDounload'

import Footer from './Componts/Footer'




const App = () => {
  return (
    <div>
    

    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
      <Route path="/about" element={<About/>}>  </Route>
      <Route path="/contactUs" element={<ContactUs/>}>  </Route>
      <Route path="/brochureDownload" element={<BroucherDounload/>}>  </Route>
    
    </Routes>
   
    </BrowserRouter>
   
   <Footer/>
    </div>

  )
}

export default App
