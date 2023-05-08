import { createRoot } from "react-dom/client";
import { atom } from "jotai";

import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const cor = atom("#121214");
root.render(<App />);
