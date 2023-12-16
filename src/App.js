
import "../src/styles/main.css"
import StarterForm from "./components/StarterForm";
function App() {
  let arrayOfInputs = ["neutered", "spayed", "ringworm", "lit on fire"];
  return (
    <div className="App">

      <StarterForm/>
    </div>
  );
}

export default App;
