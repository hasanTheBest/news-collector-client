import { Container } from "@mui/material";
import { SnackbarProvider } from "notistack";
import NewspaperProvider from "./Context/NewspaperContext";
import FetchIndicator from "./Components/FetchIndicator";
import ShowResponseAlert from "./Components/ShowResponseAlert";
import DisplayNews from "./Components/DisplayNews";
import SelectNewsPaper from "./Components/SelectNewsPaper";

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Tiro Bangla", "Noto Serif", "serif"].join(","),
    },
  },
});

export default function App() {
  return (
    <MUIThemeProvider theme={theme}>
      <SnackbarProvider>
        <NewspaperProvider>
          <Container maxWidth="xl">
            <SelectNewsPaper />
            <DisplayNews />
            <FetchIndicator />
          </Container>
          <ShowResponseAlert />
        </NewspaperProvider>
      </SnackbarProvider>
    </MUIThemeProvider>
  );
}
