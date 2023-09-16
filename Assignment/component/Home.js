import React, { useState } from "react";

const App = () => {
  const [inputList, setinputList] = useState("hello");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const ListofItem = () => {
    setitems((oldItem) => {
      return [...oldItem, inputList];
    });
    setinputList(" ");
  };
  return (
    <>
      <div>
        <h1>TODO list</h1>
        <div className="d-flex">
          <form>
            <div class="form-group d-flex">
              <input
                type="text"
                className="form-group"
                onChange={itemEvent}
                value={inputList}
              />
            </div>
          </form>

          <div>
            <button className="btn btn-primary" onClick={ListofItem}>
              {" "}
              Add To List
            </button>
          </div>

          <ol>{/* <li>{inputList}</li> */}</ol>
        </div>

        <ul class="list-group">
          {items.map((itemval) => {
            return <li className="list-group-item">{itemval}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
