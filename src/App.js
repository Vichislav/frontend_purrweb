import './css/App.css';
import Header from './Components/Header'
import {Route, Routes} from "react-router-dom";
import Registration from "./Pages/Registration";
import Authorization from "./Pages/Аuthorization";
import OwnData from "./Pages/OwnData";
import ProfilePage from "./Pages/ProfilePage";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Authorization />}/>
              <Route path="/registration" element={<Registration />}/>
              <Route path="/OwnData" element={<OwnData  />}/>
              <Route path="/Profile" element={<ProfilePage />}/>
          </Routes>
      </div>
    );
}

export default App;
