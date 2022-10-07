import React from "react";
import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Categories from "./Categories/Categories";
import Movie from "./Movie/Movie";
import PosterImage from "./PosterImage/PosterImage";
import Parts from "./SeriesAndParts/Parts";
import Series from "./SeriesAndParts/Series";
import Tags from "./Tags/Tags";

const AddPostAndEditPostForm = ({ postDetail, setPostDetail, onSubmitHandler, onDeleteHandler, postId }) => {
  const navigate = useNavigate();

  const onPostTypeChangeHandler = (event) => {
    setPostDetail({ ...postDetail, type: event.target.value });
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

  const onGoBackHandler = () => {
    navigate(-1);
  };

  return (
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
            <Form.Select onChange={onPostTypeChangeHandler} value={postDetail.type}>
              <option value="singleVideo">Single Video</option>
              <option value="multiVideo">Multi Video</option>
              <option value="multiFile">Multi File</option>
              <option value="series">Series</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={10}>
          <Form.Group className="mb-3">
            <Form.Label>Meta Information</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              name="metaData"
              as="textarea"
              value={postDetail.metaData}
              rows={3}
            />
          </Form.Group>

          {(postDetail.type === "singleVideo" || postDetail.type === "series") && (
            <Movie onChangeHandler={onChangeHandler} postDetail={postDetail} />
          )}
          {postDetail.type === "series" && (
            <Series
              content={postDetail.content}
              setContent={(newContent) => setPostDetail({ ...postDetail, content: newContent })}
            />
          )}
          {postDetail.type !== "singleVideo" && postDetail.type !== "series" && (
            <Parts postDetail={postDetail} setPostDetail={setPostDetail} />
          )}
        </Col>
        <Col lg={2}>
          <Categories
            selectedCategories={postDetail.categories}
            setSelectedCategories={(newCategories) => setPostDetail({ ...postDetail, categories: newCategories })}
          />
          <Tags onChangeHandler={onChangeHandler} postDetail={postDetail} />
          <PosterImage
            onImageChangeHandler={onImageChangeHandler}
            image={postDetail.previewImage}
            imageFile={postDetail.imageFile}
          />
          <Card className="p-1 mt-2">
            {" "}
            <ButtonGroup className="w-100">
              {postId ? (
                <Button variant="danger" onClick={onDeleteHandler}>
                  Delete
                </Button>
              ) : (
                <Button variant="secondary" onClick={onGoBackHandler}>
                  Go back
                </Button>
              )}
              {postId ? (
                <Button type="submit" variant="warning">
                  Update
                </Button>
              ) : (
                <Button type="submit" variant="success">
                  Publish
                </Button>
              )}
            </ButtonGroup>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPostAndEditPostForm;
