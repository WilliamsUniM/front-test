import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Poke from './components/poke';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Poke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
