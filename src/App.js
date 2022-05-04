import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainRoutes } from './Routes/MainRoutes';
import SignInSide from './components/Login';
import AddressForm from './components/Checkout/AddressForm';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainRoutes/>
    
    </div>
  );
}

export default App;
