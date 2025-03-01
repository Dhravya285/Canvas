import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import SignUp from './Components/SignUp/SignUp'
// import ExcalidrawComponent from './Components/ExcaliDraw/Excalidraw'

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/signup' element={<SignUp/>}/>
      {/* <Route path='/playground' element={<ExcalidrawComponent/>}/> */}
     </Routes>
    </>
  )
}

export default App
