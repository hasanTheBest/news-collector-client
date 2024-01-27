import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNews from "../Components/DisplayNews";
import NewspaperProvider from "../Context/NewspaperContext";

export default function App() {
  return (
    <NewspaperProvider>
      <Container maxWidth="xl">
        <SelectNewsPaper />
        <DisplayNews />
      </Container>
    </NewspaperProvider>
  );
}
