import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Sidebar/>
      
      <Chat/>
      
      
      <Info/>
    </div>
  );
}

export default App;
