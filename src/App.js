import './App.scss';
import { Navbar } from './components/Navbar';
import { Footer } from "./components/Footer";
import { Pricing } from './components/Pricing';
import { Addons } from './components/Addons';
import { StartFree } from './components/StartFree';
import { Faqs } from './components/Faqs';
//import './prueba.scss'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Pricing />
        <Addons />
        <StartFree/>
        <Faqs/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
