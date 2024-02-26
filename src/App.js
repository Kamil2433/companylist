import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import CompContext from "./Context/CompContext";

function App() {
  return (
    <>
      <div class="m-4">
        <b> CompanyList.com </b>
      </div>
      <div className="App">
        <CompContext>
          <Dashboard />
        </CompContext>
      </div>
    </>
  );
}

export default App;
