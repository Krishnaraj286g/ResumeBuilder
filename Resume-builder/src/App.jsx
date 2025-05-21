import './App.css';
import { Route, Routes } from 'react-router-dom'
import "./bootstrap-5.3.3-dist/css/bootstrap.min.css"
import "./bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js"
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ResumeInput from './components/ResumeInput.jsx';
import "./Resumeinput.css"
import './ResumePreview.css'; // external styling


import ResumeBuildFresher from './components/ResumeBuildFresher.jsx';


function App() {

  return (
    <>

    {/* <ResumeInput/> */}
    {/* <Home/> */}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/resumeinput' element={<ResumeInput/>}/>
        <Route path="/preview" element={<ResumeBuildFresher/>} />

    </Routes>
    </>
  )
}

export default App



