
import {Footer, Home , Nav, About , Career , Contact} from './index'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
     <Nav/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/career' element={<Career/>}/>
     <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
