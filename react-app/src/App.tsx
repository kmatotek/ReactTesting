import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          children="hi"
          onClose={() => {
            setAlertVisibility(false);
          }}
        ></Alert>
      )}
      <Button
        color="primary"
        children="hello"
        onClick={() => {
          setAlertVisibility(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
