import './App.css';
import Item from './components/item.js'

function App() {
  return (
    <div className="portfolio">
      <h1> hi my name is jimmy ren</h1> 
      <Item companyName="Raising Canes"> </Item>
      <Item companyName="Chipotle"/>
    </div>
  );
}

export default App;
