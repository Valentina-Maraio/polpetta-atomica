import logo from './polpettaAtomica.png';
import './App.css';
import Example from './Example'
import { ExampleProvider} from './ExampleContext'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        </div>
      </header>
    </div>
  );
}

export default App;
