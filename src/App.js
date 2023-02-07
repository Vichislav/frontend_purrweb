import './css/App.css';
import Header from './Components/Header'
import {Route, Routes} from "react-router-dom";
import Registration from "./Pages/Registration";
import Authorization from "./Pages/Аuthorization";

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<Authorization />}/>
              <Route path="/registration" element={<Registration />}/>
          </Routes>
      </div>
    );
}

export default App;
