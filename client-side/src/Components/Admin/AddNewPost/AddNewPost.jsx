import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import AddPostAndEditPostForm from "./AddPostAndEditPostForm/AddPostAndEditPostForm";

const AddNewPostAndEdit = () => {
  const { postId } = useParams();

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
    type: "singleVideo",
  };

  const [postDetail, setPostDetail] = useState(defaultFormValue);
  const [publishOption, setPublishOption] = useState("singleVideo");
  useEffect(() => {
    if (postId) {
      const fetchPostDetail = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BACKEND_API}/posts/${postId}`);

        setPublishOption(data.type);
        setPostDetail({
          title: data.title,
          name: data.name,
          imageFile: null,
          previewImage: data.image,
          categories: data.categories.map((category) => `${category.id}`),
          content: data.content,
          year: data.year,
          downloadLink: data.content,
          watchTime: data.watchTime,
          quality: data.quality,
        });
      };
      fetchPostDetail();
    }
  }, [postId]);

  const onResetHandler = () => {
    setPostDetail({ ...defaultFormValue });
    setPublishOption("singleVideo");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
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

      if (postId) {
        await axios.patch(`${process.env.REACT_APP_API_BACKEND_API}/posts/${postId}`, formData, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        toast.success("Post Updated Successfully");
      } else {
        const { data } = await axios.post(`${process.env.REACT_APP_API_BACKEND_API}/posts`, formData, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        toast.success("Post added successfully");
      }
    } catch (err) {
      const errorMessages = err.response.data.message;
      if (Array.isArray(errorMessages)) {
        errorMessages.forEach((message) => {
          toast.error(message);
        });
      } else {
        toast.error(errorMessages);
      }
    }
  };

  console.log(postDetail);

  return (
    <main className="m-2 p-3">
      <section>
        <h4>Add New Post</h4>
        <AddPostAndEditPostForm
          postDetail={postDetail}
          setPostDetail={setPostDetail}
          setPublishOption={setPublishOption}
          onSubmitHandler={onSubmitHandler}
          publishOption={publishOption}
          onResetHandler={onResetHandler}
        />
      </section>
    </main>
  );
};
export default AddNewPostAndEdit;
