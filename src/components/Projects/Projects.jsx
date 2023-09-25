import { Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./projects.css";
import { data } from "./projectsData";

export default function Projects() {
  return (
    <div>
      <h1 id="projects"> Projects</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 4, sm: 10, md: 15 }}
        alignItems="center"
        justifyContent="center"
      >
        {data.map((product, key) => (
          <Grid xs={2} sm={4} md={4} key={key}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.picture}
                  alt={product.alt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
