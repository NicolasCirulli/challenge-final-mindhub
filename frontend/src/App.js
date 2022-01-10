import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
function App() {
  return (
    <div className="App">
        <Navigation />
        <Home />
        
    </div>
  );
}

export default App;
