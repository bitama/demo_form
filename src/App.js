
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import BigForm from "./components/BigForm"
import SmallForm from "./components/SmallForm"

function App() {
  return (
    <div className="App">
      <h1>This is the form</h1>
      {/* <BigForm /> */}
      <SmallForm/>
    </div>
  );
}

export default App;
