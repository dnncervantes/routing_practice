import './App.css';
import{link, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';



function App() {
  return (
    <div className="App">
      <h2>Routing</h2>
      <hr/>
      {/* Theater stage where Componenets will load based on their route */}
      <Routes>
        
        <Route path='/home' element={<Home/>}/>
        <Route path='/:input' element={<Input/>}/>
        <Route path='/:input/:textColor/:bgColor' element={<Input/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
