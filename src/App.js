import React from "react";
import { Alert, Button } from "react-bootstrap";
import Signup from "./Auth/Signup";

const App = () => {
  return (
    <div className="p-3">
      <Alert variant="success">This is a success alert!</Alert>
      <Button variant="primary">Click Me</Button>
      <Signup />
    </div>
  );
};

export default App;
