
import Main from './components/Main';
import './components/style.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Edit from './pages/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
