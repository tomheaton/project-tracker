import {useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useState} from "react";
import BugsForm from "../components/BugsForm";

const BugsPage = () => {

  const { state } = useLocation();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={"container"}>
      <header>
        <h1>Bugs</h1>
        <h2>Project: {state.name}</h2>
      </header>

      <div>
        {!showForm && <Button onClick={() => setShowForm(!showForm)}>Create</Button>}
        {showForm && <BugsForm setShowForm={setShowForm}/>}
      </div>
    </div>
  );
}

export default BugsPage;