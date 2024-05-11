import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {useState} from "react";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <ListarTarefa/>
      </div>
    </ThemeProvider>
  );
}

export default App;
