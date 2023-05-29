import { colors } from "@ofelipescherer/tokens";
import { styled } from "./styles";

console.log("hello world", colors);

const Button = styled("button", {
  fontFamily: "$default",
  height: "$10",
});

export function App() {
  return <Button>Hello</Button>;
}
