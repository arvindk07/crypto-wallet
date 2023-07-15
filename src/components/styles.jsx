import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  App: {
    color: "white",
    minHeight: "100vh",
    backgroundColor: "#14161a",
  },
}));

export const headerStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    cursor: "pointer",
    fontSize: "60px",
  },
}));

export const bannerStyle = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./hero-banner.jpg)",
  },

  bannerContent: {
    height: 400,
    paddingTop: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  tagLine: {
    height: "40%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
