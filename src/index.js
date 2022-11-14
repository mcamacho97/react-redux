import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const actionIncremented = {
  type: "incremented",
};

const actionDecremented = {
  type: "decremented",
};

const actionReseted = {
  type: "reseted",
};

const counterReducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "incremented":
      return state + 1;
    case "decremented":
      return state - 1;
    case "reseted":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

//Al utilizar la store ya no es necesario llamar al reducer de esta manera
// counterReducer(0, actionIncremented);
// counterReducer(1, actionDecremented);
// counterReducer(0, actionReseted);

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch(actionIncremented)}>+</button>
      <button onClick={() => store.dispatch(actionDecremented)}>-</button>
      <button onClick={() => store.dispatch(actionReseted)}> = </button>
    </div>
  );
};

// store.dispatch(actionIncremented);
// store.dispatch(actionIncremented);
// store.dispatch(actionIncremented);

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
