import "./App.css";

import { AccordianProvider } from "context/AccordionContext";
import AccordionContainer from "components/Accordion";

function App() {
  return (
    <div className="App">
      <AccordianProvider>
        <AccordionContainer />
      </AccordianProvider>
    </div>
  );
}

export default App;
