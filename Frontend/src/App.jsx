import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    background: {
      default: "#f9f9f9",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero onSearch={handleSearch} />
      <CardList searchTerm={searchTerm} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
