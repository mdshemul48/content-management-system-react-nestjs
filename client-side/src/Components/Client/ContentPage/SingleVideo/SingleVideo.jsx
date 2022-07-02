import React from "react";
import { Card } from "react-bootstrap";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const SingleVideo = () => {
  return (
    <>
      <Card className="p-2 m-4">
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: "http://ftp8.circleftp.net/FILE/Animation%20Movies/2021/Motu%20Patlu%20in%20the%20Toy%20World%20%282021%29%201080p%20WEB-DL%20AAC2.0%20x264/Motu%20Patlu%20in%20the%20Toy%20World%20%282021%29%201080p%20WEB-DL%20AAC2.0%20x264.mkv",
                type: "video/mp4",
              },
            ],
          }}
        />
      </Card>
      <a
        className="btn btn-warning btn-lg"
        size="lg"
        target="_blank"
        download
        href="http://ftp8.circleftp.net/FILE/Animation%20Movies/2021/Motu%20Patlu%20in%20the%20Toy%20World%20%282021%29%201080p%20WEB-DL%20AAC2.0%20x264/Motu%20Patlu%20in%20the%20Toy%20World%20%282021%29%201080p%20WEB-DL%20AAC2.0%20x264.mkv"
        rel="noreferrer"
      >
        Download
      </a>
    </>
  );
};

export default SingleVideo;
