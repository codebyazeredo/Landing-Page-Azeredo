import './styles/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Pattern from './components/Pattern';
import Sidebar from './components/Sidebar';
import Projetos from './components/Projetos';


function App() {
  return (
    <div className="app">
      <Pattern />
      <Navbar />
      <Banner />
      <Sidebar />
      <div className="content">
        <main>
          <Sobre />
          <Projetos />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App
