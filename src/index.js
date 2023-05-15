import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);



 

// const server = require('./backend/server')

// const PORT = process.env.PORT || 9000

// server.listen(PORT, () => {
//   console.log(`listening on ${PORT}`)
// })

console.log(process.env.PORT)