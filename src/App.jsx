import Accordion  from "./components/Accordion/index";
import { AccordionItem } from "./components/AccordionItem";

function App() {
  return (
    <>
      <Accordion>
        <AccordionItem
          id={"item-1"}
          title="Item 1"
          description="Description of item 1"
          className="item-1"
        />

        <AccordionItem
          id={"item-2"}
          title="Item 2"
          description="Description of item 2"
          className="item-"
        />
      </Accordion>
    </>
  );
}

export default App;
