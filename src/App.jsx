import React from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contect from './page/contect'
import Floobit from './component/Floobit'
import Product from './page/Product'




const App = () => {
  return (
    <div>
      <nav>

      <Navbar/>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contect' element={<Contect/>}/>
          <Route path='/product' element={<Product/>}/>


      
        </Routes>
      </main>
      <footer>
      

        <Floobit/>
      </footer>
    </div>
  )
}

export default App