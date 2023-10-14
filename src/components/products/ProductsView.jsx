import { Button, Card, Container, Grid, Typography } from "@mui/material";
import data from "./productData";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "../../align.css";

const ProductsView = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
        Responsive Card
      </Typography>
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
                <div className="align-center">
                  <Button size="medium" variant="contained">
                    View Details
                  </Button>
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
