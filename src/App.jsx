import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import './assets/App.css'; 

function App() {
  return (
    <div className="layout">
      <Navbar />
      <main>
       <Home />
        {/* aquí va el contenido central de mis compis amados*/}
        <p>Contenido principal del sitio</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;