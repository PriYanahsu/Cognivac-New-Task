import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SecondNav from './pages/SecondNav.jsx';
import Innovation from './pages/Innovation.jsx';
import './App.css'

const App = () => {
  return (
    <div class="App">
      <Navbar />
      <Home />
      <SecondNav />
      <Innovation />
    </div>
  )
}

export default App
