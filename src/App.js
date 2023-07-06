import { ThemeProvider } from "@emotion/react";
import PageRouter from "./router/PageRouter";
import theme from "./mui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageRouter />
    </ThemeProvider>
  );
}

export default App;
