import {
  AppBar,
  Select,
  Toolbar,
  MenuItem,
  Container,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { headerStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const classes = headerStyle();
  const navigete = useNavigate();
  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleNavigate = () => {
    navigete("/");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={handleNavigate}
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              wallet Socket
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
