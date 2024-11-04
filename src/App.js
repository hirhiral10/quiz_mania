import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/header";
import { Entry } from "./component/entry";
import { useState } from "react";
import { Quiz } from "./component/quiz";

function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const onSubmit = (data) => {
    const { user, language } = data;
    setError();
    if (!user) {
      setError((data)=>({ ...data, user: "User Required" }));
    }
    if (!language) {
      setError((data) => ({ ...data, language: "Please Select one option" }));
    }
    if (!user || !language) {
      return;
    }
    setUser(data);
  };

  return (
    <div className="App bg-orange-50 h-screen">
      <Header />
      {user ? <Quiz data={user}/> : <Entry onSubmit={onSubmit} error={error} />}
    </div>
  );
}

export default App;
