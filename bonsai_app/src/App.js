import './App.scss';
import { Navbar } from './components/Navbar';
import { Footer } from "./components/Footer";
import { Pricing } from './components/Pricing';
//import './prueba.scss'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
