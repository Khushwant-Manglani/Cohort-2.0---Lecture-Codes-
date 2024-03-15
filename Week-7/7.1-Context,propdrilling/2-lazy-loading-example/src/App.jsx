import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

// Note -
// lazy lets you defer loading component’s code until it is rendered for the first time.
// Suspense API, asynchronous component fetching, asynchronous data fetching

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback="loading...">
            <Dashboard />
          </Suspense>} />
          <Route path="/" element={<Suspense fallback="loading..."><Landing /></Suspense>} /> 
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
