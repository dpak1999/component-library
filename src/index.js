import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./Components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton disabled>Hello World</PrimaryButton>
    <SecondaryButton disabled>Goodbye World</SecondaryButton>
    <TertiaryButton disabled>Hey World</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
