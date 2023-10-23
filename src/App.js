
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Red from './Red';
import Hader from './page/Hader';
import Main from './page/Main';
import Footer from './page/Footer';

function App() {
  return (
    <div className="App">
     <Hader/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/uodate/:id' element={<Update/>}/>
        <Route path='/red/:id' element={<Red/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
