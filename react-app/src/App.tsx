import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
