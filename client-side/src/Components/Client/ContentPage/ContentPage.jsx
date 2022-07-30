import React from "react";
import { Card, Container } from "react-bootstrap";
import SeriesVideo from "./SeriesVideo/SeriesVideo";
import SingleVideo from "./SingleVideo/SingleVideo";

function ContentPage() {
  return (
    <main className="mt-5 text-center">
      <h1 className="text-center text-white text-bolder">The Wife 2017-1080p BluRay</h1>
      <p className="text-center text-white text-bolder">March 17, 2019</p>
      <br />
      <Container>
        <Card className="p-2">
          <img
            src="http://circleftp.net/wp-content/uploads/2022/06/MV5BMGZiZmNkZWMtMjE0OS00NzBmLWIwNjMtZmZjMWE1MjE1MTM2XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_-1184x1754.jpg"
            alt="this is going to be really good."
            className="w-auto"
          />
        </Card>
        {/* <SingleVideo /> */}
        <SeriesVideo />
      </Container>
    </main>
  );
}

export default ContentPage;
