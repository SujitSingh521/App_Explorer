import logo from './logo.svg';
import './App.css';

function App() {

  function apple() {
    alert("I am devil of my world 😈");
  }
  return (
    <div className="App">
      <h2>Who are You!</h2>
      <button onClick={() => apple()}>Click Me</button>
    </div>
  );
}
export default App;