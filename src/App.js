import React, {useState} from "react";
import { Form } from "./components/Form.jsx";
import "./App.css";
import { ProfileCard } from "./components/ProfileCard";


const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [ ...profiles, profile ];
    setProfiles(newProfiles);
  };

  return (
    <div className="app">
      <h1>Listado de perfiles</h1>
      <Form addProfile={addProfile} />
      <ProfileCard profiles={profiles} />
    </div>
  );
};

export default App;
