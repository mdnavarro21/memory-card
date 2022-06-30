import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './styles/App.css';

function App() {
  document.title = 'Memory Card Game';
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
