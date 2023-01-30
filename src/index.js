import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import { todos } from "./data";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App list={todos} />
  </StrictMode>,
);
