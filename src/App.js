import "../src/styles/main.css"
import StarterForm from "./components/StarterForm";
function App() {
  let arrayOfInputs = ["neutered", "spayed", "ringworm", "lit on fire"];
  return (
    <div className="App">
      <StarterForm/>
      {/* <div className="options">
        {arrayOfInputs.map((aoi, i) => {
          return (
              <h4>{aoi}</h4>
          );
        })}
      </div>
      <p>
        It was a pleasure to see -pet's name- for -appointment type-.
      </p> */}
    </div>
  );
}

export default App;
