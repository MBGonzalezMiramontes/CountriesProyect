import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store/store.jsx";
import { Provider } from "react-redux"; // provee a la app del estado que se crea dentro del store
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//la app tiene disponible a través de la store las actions (no al estado)