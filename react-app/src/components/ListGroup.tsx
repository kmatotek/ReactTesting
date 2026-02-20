// In react, a component cannot return more than one element

import { useState } from "react";

// using '<>' empty brackets is telling react to use a 'Fragement'
// <></> same as <Fragement></Fragment>

// NO for loops in jsx :(

// In react, a component cannot return more than one element
// using '<>' empty brackets is telling react to use a 'Fragement'
// <></> same as <Fragement></Fragment>
// NO for loops in jsx :(

// Props are the inputs to our components,
// Here items would be a good prop if we want to control what this list displays
// That way our list component can be more versatile
// Same with the heading

// Props: { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook, more specifically, a state hook
  // useState used for things that the state might change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function

  // Can also do this, but a little more verbose
  // let items = props.items;
  // let heading = props.heading;

  const getMessage = () => {
    items.length === 0 && <p>No items found!</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
