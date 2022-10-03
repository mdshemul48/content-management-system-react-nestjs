import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

import Categories from "./Categories/Categories";

import styles from "./AddNewPost.module.css";
import PosterImage from "./PosterImage/PosterImage";
import Movie from "./Movie/Movie";
import Series from "./SeriesAndParts/Series";
import Parts from "./SeriesAndParts/Parts";

const AddNewPost = () => {
  const [publishOption, setPublishOption] = useState("singleVideo");
  const { auth } = useSelector((state) => state);
  const defaultFormValue = {
    title: "",
    name: "",
    imageFile: null,
    previewImage: null,
    categories: [],
    content: [],
    year: "",
    downloadLink: "",
    watchTime: "",
    quality: "",
  };
  const [postDetail, setPostDetail] = useState(defaultFormValue);

  useEffect(() => {
    setPostDetail(defaultFormValue);
  }, [publishOption]);

  const onResetHandler = () => {
    setPostDetail(defaultFormValue);
    setPublishOption("singleVideo");
  };

  const onPostTypeChangeHandler = (event) => {
    setPublishOption(event.target.value);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPostDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    // eslint-disable-next-line no-undef
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPostDetail({
        ...postDetail,
        imageFile: file,
        previewImage: reader.result,
      });
    };
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append("title", postDetail.title);
    formData.append("type", publishOption);
    formData.append("name", postDetail.name);
    formData.append("image", postDetail.imageFile);
    formData.append("categories", JSON.stringify(postDetail.categories.map((item) => parseInt(item, 10))));
    formData.append(
      "content",
      publishOption === "singleVideo" ? JSON.stringify(postDetail.downloadLink) : JSON.stringify(postDetail.content)
    );
    formData.append("tags", "this is tags");
    formData.append("year", postDetail.year);
    formData.append("watchTime", postDetail.watchTime);
    formData.append("quality", postDetail.quality);

    const { data } = await axios.post("http://localhost:5000/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${auth.token}`,
      },
    });
  };

  console.log(postDetail);

  return (
    <main className="m-2 p-3">
      <section>
        <h4>Add New Post</h4>
        <Form onSubmit={onSubmitHandler}>
          <Row>
            <Col lg={6} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="text" onChange={onChangeHandler} value={postDetail.title} />
              </Form.Group>
            </Col>
            <Col lg={4} md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" onChange={onChangeHandler} value={postDetail.name} />
              </Form.Group>
            </Col>
            <Col lg={2} md={4} className="align-items-end d-flex">
              {" "}
              <Form.Group className="mb-3 w-100">
                <Form.Select
                  className={styles.selectPublishType}
                  onChange={onPostTypeChangeHandler}
                  value={publishOption}
                >
                  <option value="singleVideo">Single Video</option>
                  <option value="multiVideo">Multi Video</option>
                  <option value="singleFile">Single File</option>
                  <option value="multiFile">Multi File</option>
                  <option value="series">Series</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              {(publishOption === "singleVideo" || publishOption === "series") && (
                <Movie onChangeHandler={onChangeHandler} postDetail={postDetail} />
              )}
              {publishOption === "series" && (
                <Series
                  content={postDetail.content}
                  setContent={(newContent) => setPostDetail({ ...postDetail, content: newContent })}
                />
              )}
              {publishOption !== "singleVideo" && publishOption !== "series" && (
                <Parts postDetail={postDetail} setPostDetail={setPostDetail} />
              )}
            </Col>
            <Col lg={2}>
              <Categories
                selectedCategories={postDetail.categories}
                setSelectedCategories={(newCategories) => setPostDetail({ ...postDetail, categories: newCategories })}
              />
              <PosterImage onImageChangeHandler={onImageChangeHandler} image={postDetail.previewImage} />
              <Card className="p-1 mt-2">
                {" "}
                <ButtonGroup className="w-100">
                  <Button variant="secondary" onClick={onResetHandler}>
                    Reset
                  </Button>{" "}
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </ButtonGroup>
              </Card>
            </Col>
          </Row>
        </Form>
      </section>
    </main>
  );
};
export default AddNewPost;
