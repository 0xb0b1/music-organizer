import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Routes from "./routes";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Header />
        <Routes />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
