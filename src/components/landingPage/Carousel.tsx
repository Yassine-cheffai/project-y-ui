import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export function IntroductionSlideShow(props: any) {
  var items = [
    {
      image: "/pictures/introduction.png",
    },
    {
      image: "/pictures/topic_tracker.png",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper style={{ textAlign: "center" }}>
      <img
        src={props.item.image}
        alt="topic tracker help you gather feedbacks upon a specific topic from social medias"
      />
    </Paper>
  );
}
