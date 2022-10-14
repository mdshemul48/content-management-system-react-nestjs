import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import axiosInstance from "../../../utility/axiosInstance";
import SeriesVideo from "./SeriesVideo/SeriesVideo";
import SingleVideo from "./SingleVideo/SingleVideo";

import styles from "./ContentPage.module.css";
import MultiVideoOrFiles from "./MultiVideoOrFiles/MultiVideoOrFiles";

function ContentPage() {
  const { user } = useSelector((state) => state.auth);
  const { contentId } = useParams();
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get(`/posts/${contentId}`);
      setContentData(data);
    };
    fetchData();
  }, []);

  return (
    contentData && (
      <main className="mt-5 text-center">
        <div className={`${styles.contentPage_title} py-2`}>
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="text-white text-bolder">{contentData.title}</h2>

            {user && (
              <Button as={Link} to={`/admin/edit/${contentData.id}`} variant="warning">
                Edit
              </Button>
            )}
          </div>
        </div>
        <br />
        <Container>
          <Card className="p-2">
            <img
              src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${contentData.image}`}
              alt={contentData.name}
              className="w-auto"
            />
          </Card>
          {contentData.type === "singleVideo" && <SingleVideo link={contentData.content} />}
          {contentData.type === "series" && <SeriesVideo content={contentData.content} />}
          {(contentData.type === "multiVideo" || contentData.type === "multiFile") && (
            <MultiVideoOrFiles content={contentData.content} type={contentData.type} />
          )}
          {contentData.type === "singleFile" && (
            <a
              className="btn btn-warning btn-lg mt-2"
              size="lg"
              target="_blank"
              download
              href={contentData.data}
              rel="noreferrer"
            >
              Download
            </a>
          )}
        </Container>
      </main>
    )
  );
}

export default ContentPage;
