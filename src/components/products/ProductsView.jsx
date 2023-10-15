import { Button, Card, Container, Grid, Typography } from "@mui/material";
import data from "./productData";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "../../align.css";
import { Link } from "react-router-dom";

const ProductsView = () => {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <Container maxWidth="lg">
      <br />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </Search>
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {data.map((result, index) => (
          <Grid item xs={12} sm={4} ms={4} key={index}>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ padding: "10xp", marginBottom: "30px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={result.images[0]}
                  alt="green iguana"
                  style={{ borderRadius: "5px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActionArea sx={{ mb: 2 }}>
                <div className="button-parent">
                  <div className="align-left">
                    <Button size="medium" variant="contained" onClick={()=>{
                      <Link/>
                    }}>
                      View Details
                    </Button>
                  </div>
                  <div className="align-right">
                    <Button size="medium" variant="contained">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsView;
