import './App.css';
import { Route, Routes } from 'react-router-dom';
import Poke from './components/poke';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Poke />} />
    </Routes>
  );
}

export default App;
