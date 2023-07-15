import { Container, Typography } from "@mui/material";
import { bannerStyle } from "../styles";
import Carousel from "./Carousel";

const AppBanner = () => {
  const classes = bannerStyle();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagLine}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Wallet Socket
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
            }}
          >
            get all the info regarding your favourite crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default AppBanner;
