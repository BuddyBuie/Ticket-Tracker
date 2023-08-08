//import { useState } from "https://cdn.skypack.dev/react@17.0.1";
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
    if (value.length > 0) setNewList(preValue => [...preValue, value]);
    setNewValue("");
  }

  function clearList() {
    setNewList([]);
  }

  function clearItem(e) {
    const id = e.target.id;
    const newList = list.filter(item => item !== id);
    setNewList(newList);
  }

  return /*#__PURE__*/(
    React.createElement(Card, { className: "bg-light mt-3 me-3 ms-3 pe-2 ps-2 pb-2" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-center mt-3" }, "Ticket Tracker"), /*#__PURE__*/
    React.createElement(InputGroup, { className: "mt-3" }, /*#__PURE__*/
    React.createElement(Form.Control, {
      onKeyUp: enterKey,
      onChange: input,
      value: value,
      placeholder: "Enter Your Ticket Number",
      "aria-describedby": "basic-addon2" }), /*#__PURE__*/

    React.createElement(Button, { onClick: handleClick, variant: "secondary", id: "button-addon2" }, "Submit")), /*#__PURE__*/



    React.createElement(ListGroup, { className: "d-flex mt-2" },
    list.map((item) => /*#__PURE__*/
    React.createElement(ListGroup.Item, { key: item, className: "p-2 w-100", variant: "info" },
    item, /*#__PURE__*/
    React.createElement(Button, {
      onClick: clearItem,
      className: "ms-3",
      variant: "secondary",
      id: item }, "Posted")))), /*#__PURE__*/






    React.createElement(Button, {
      onClick: clearList,
      className: "mt-2",
      variant: "dark",
      id: "button-addon2" }, "Clear All")));





}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));