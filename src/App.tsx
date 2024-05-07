import { AccordianProvider } from "context/AccordionContext";
import AccordionContainer from "components/Accordion";

function App() {
  return (
    <div>
      <AccordianProvider>
        <AccordionContainer />
      </AccordianProvider>
    </div>
  );
}

export default App;
