import './App.css';
import Card from './components/Card';
import Input from './components/input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Update</h1>
      <div className="input-group">
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <Button onClick={weather.fetchCurrentUserLocationData} value="Refresh" />
    </div>
  );
}

export default App;
