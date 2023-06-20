import "./App.css";
import { Button } from "./components/Button";
import { useToggle } from "./hooks/useToggle";
import classNames from "classnames";

function App() {
  const { active, toggle } = useToggle(false);

  return (
    <div className="container">
      <div className={classNames("result", active ? "active" : "inactive")}>
        {active ? "ON" : "OFF"}
      </div>
      <Button variant="primary" onClick={toggle}>
        Switch
      </Button>
    </div>
  );
}

export default App;
