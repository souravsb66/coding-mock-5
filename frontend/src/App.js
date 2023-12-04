import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      
    </div>
  );
}

export default App;
