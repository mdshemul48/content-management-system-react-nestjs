import React from "react";
import { Card } from "react-bootstrap";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function SingleVideo({ link }) {
  return (
    <>
      <Card className="p-2 m-4">
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: link,
                type: "video/mp4",
              },
            ],
          }}
        />
      </Card>
      <a className="btn btn-warning btn-lg" size="lg" target="_blank" download href={link} rel="noreferrer">
        Download
      </a>
    </>
  );
}

export default SingleVideo;
