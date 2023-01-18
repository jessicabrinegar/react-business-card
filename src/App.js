import './App.css';
import About from "./about.js"
import Intro from "./intro.js"

function App() {
  return (
    <div className="container-fluid w-100 d-flex justify-content-center bg-dark">
    <div className="App d-flex flex-column justify-content-center py-4 mt-5">
      <Intro />
      <About />
    </div>
    </div>
  );
}
export default App;
