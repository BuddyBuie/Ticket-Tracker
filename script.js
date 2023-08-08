const { useState } = React;
const { InputGroup, Button, ListGroup, Card, Form } = ReactBootstrap;

function App() {
  const [value, setNewValue] = useState("");
  const [list, setNewList] = useState([]);

  function input(e) {
    let newValue = e.target.value;
    setNewValue(newValue);
  }

  function enterKey(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (value.length > 0) setNewList((preValue) => [...preValue, value]);
    setNewValue("");
  }

  function clearList() {
    setNewList([]);
  }

  function clearItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setNewList(newList);
  }

  return (
    <Card className="bg-light mt-3 me-3 ms-3 pe-2 ps-2 pb-2">
      <h1 className="text-center mt-3">Ticket Tracker</h1>
      <InputGroup className="mt-3">
        <Form.Control
          onKeyUp={enterKey}
          onChange={input}
          value={value}
          placeholder="Enter Your Ticket Number"
          aria-describedby="basic-addon2"
        />
        <Button onClick={handleClick} variant="secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
      <ListGroup className="d-flex mt-2">
        {list.map((item, index) => (
          <ListGroup.Item key={index} className="p-2 w-100" variant="info">
            {item}
            <Button
              onClick={() => clearItem(index)}
              className="ms-3"
              variant="secondary"
            >
              Posted
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        onClick={clearList}
        className="mt-2"
        variant="dark"
        id="button-addon2"
      >
        Clear All
      </Button>
    </Card>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
