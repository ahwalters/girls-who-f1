import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  </ChakraProvider>
);



 

// const server = require('./backend/server')

// const PORT = process.env.PORT || 9000

// server.listen(PORT, () => {
//   console.log(`listening on ${PORT}`)
// })

// console.log(process.env.PORT)