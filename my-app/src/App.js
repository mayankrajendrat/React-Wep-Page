import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar'
import CardComponent from './components/Card/Card';

function App() {
  return (
    <div className="App">
     <NavbarComponent></NavbarComponent>
     <CardComponent></CardComponent>
    </div>
  );
}

export default App;
