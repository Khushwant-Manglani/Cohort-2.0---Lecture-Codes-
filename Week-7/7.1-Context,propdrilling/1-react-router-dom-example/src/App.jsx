import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

// Note -

// 1 - 
// in changing the dom -> window.location.href we are not doing the client side routing
// means all html, js is coming again in network tab reloading happening again
// it is not a good practice.

// 2 -
// If we have to do an client side routing 
// means we want not to fetch whole html, js again 
// then the good practice is to use useNavigate Hook 
// comming from react-router-dom
// But we have to use this inside the BrowserRouter

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => { 
          // window.location.href="/"
          navigate("/");
        }} >Landing Page</button>
        
        <button onClick={() => {
          // window.location.href="/dashboard"
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </div>
    </div>
  );
}

export default App
