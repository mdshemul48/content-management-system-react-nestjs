import React from "react";
import { Card, Container } from "react-bootstrap";
import SeriesVideo from "./SeriesVideo/SeriesVideo";
// import SingleVideo from "./SingleVideo/SingleVideo";

import styles from "./ContentPage.module.css";

function ContentPage() {
  return (
    <main className="mt-5 text-center">
      <div className={styles.contentPage_title}>
        <h2 className="text-center text-white text-bolder">The Walk</h2>
        <ul>
          <li>45 Minutes</li>
          <li>2022-02-02</li>
          <li>Romantic</li>
          <li>U/A 18+</li>
        </ul>
        <p className="text-center text-white text-bolder">March 17, 2019</p>
      </div>
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
