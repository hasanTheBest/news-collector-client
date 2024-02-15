import { Container } from "@mui/material";
import SelectNewsPaper from "../Components/SelectNewsPaper";
import DisplayNews from "../Components/DisplayNews";
import NewspaperProvider from "../Context/NewspaperContext";
import FetchIndicator from "../utilites/FetchIndicator";
import ShowResponseAlert from "../utilites/showResponseAlert";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <SnackbarProvider >
    <NewspaperProvider>
      <Container maxWidth="xl">
        <SelectNewsPaper />
        <DisplayNews />
        <FetchIndicator />
        <ShowResponseAlert />
      </Container>
    </NewspaperProvider>
    </SnackbarProvider>
  );
}
