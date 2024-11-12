import { useAccordionContext } from "../Accordion";

export const AccordionItem = ({ id, title, description, className }) => {
  const { openItem, toggleItem } = useAccordionContext();

  const isOpen = openItem === id;
  return (
    <li>
      <h3 className={className} onClick={() => toggleItem(id)}>{title}</h3>
      <p className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{description}</p>
    </li>
  );
};

export default AccordionItem;
