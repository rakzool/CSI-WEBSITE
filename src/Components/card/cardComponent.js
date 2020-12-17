import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Card.css";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardComponent({ name, desp, alt, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{
          height: "50rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt={alt}
          image={image}
          title="SIGS"
          style={{
            height: "20rem",
            width: "30rem",
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="Card-title">{name}</div>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              fontSize: "1.5rem",
              fontFamily: "Russo One",
            }}
          >
            {desp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
