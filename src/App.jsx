import Header from "./components/Header";
import CoinPage from "./components/CoinPage";
import HomePage from "./components/HomePage";
import { useStyles } from "./components/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
