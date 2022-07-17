import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Chakra Ui
import { ChakraProvider } from "@chakra-ui/react";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
);
