import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [temperature, setTemperature] = useState(0);
  return (
    <div className="App">
      <h1>Temperature Control</h1>
      <div className='temperature-screen'>
        <h2>{temperature}°C</h2>
      </div>
      <Button action="-" onClick={() => setTemperature(temperature - 1)}></Button>
      <Button action="+" onClick={() => setTemperature(temperature + 1)}></Button>
    </div>
  );
}

export default App;
