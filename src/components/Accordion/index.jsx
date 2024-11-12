import { createContext, useContext, useState } from "react";

export const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider",
    );
  }
  return ctx;
};

const Accordion = ({ className, children }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    if (id === null) {
      throw new Error('Cannot toggle null id');
    }
    setOpenItem(prev => prev === id ? null : id);
    console.log(id)
  };

  const contextValue = {
    openItem,
    toggleItem,
  };

  if (!children) {
    throw new Error('Accordion must have children');
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;


