import logo from './polpettaAtomica.png';
import './App.css';
import Example from './Example'
import Other from './Other'
import { ExampleProvider} from './ExampleContext'
import { OtherProvider} from './OtherContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Polpetta Atomica</h1>
        <div>
        <ExampleProvider>
          <Example />
        </ExampleProvider>
        <OtherProvider>
          <Other />
        </OtherProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
