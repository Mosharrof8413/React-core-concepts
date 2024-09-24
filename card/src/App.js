import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist'
function App() {
  const product=[
    {
      price :9999,
      name:"Iphone 10S Max"
    },
    {
      price :9999,
      name:"Redmi Note 10S Max"
    }
  ]
  return (
    <>
    <Navbar/>
    <Productlist/>
    </>
    
  );
}

export default App;
