import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import SignUp from './Components/SignUp/SignUp'

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App
