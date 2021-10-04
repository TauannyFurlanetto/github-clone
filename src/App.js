import './App.css';
import apiGitHub from "./services/apiGithub.js";
import {useEffect} from "react";

function App() {
  useEffect(()=>{
    apiGitHub.get("users/tauannyFurlanetto").then(response=>{response.data}).then(response=>console.log(response)).catch(error=>console.log(error));
  }, [ ])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
