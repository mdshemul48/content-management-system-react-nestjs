import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

import AddPostAndEditPostForm from "./AddPostAndEditPostForm/AddPostAndEditPostForm";
import { createOrUpdatePost } from "../../../Store/asyncMethods/postMethod";
import axiosInstance from "../../../utility/axiosInstance";

const AddNewPostAndEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    metaData: "",
    tags: "",
    type: "singleVideo",
  };

  const [postDetail, setPostDetail] = useState(defaultFormValue);
  useEffect(() => {
    if (postId) {
      const fetchPostDetail = async () => {
        const { data } = await axiosInstance.get(`/admin/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        setPostDetail({
          title: data.title,
          name: data.name,
          imageFile: null,
          previewImage: data.image,
          coverFile: null,
          previewCover: data.cover,
          categories: data.categories.map((category) => `${category.id}`),
          content: data.content,
          year: data.year,
          downloadLink: data.content,
          watchTime: data.watchTime,
          quality: data.quality,
          metaData: data.metaData,
          tags: data.tags,
          type: data.type,
        });
      };
      fetchPostDetail();
    } else {
      setPostDetail(defaultFormValue);
    }
  }, [postId]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(
      createOrUpdatePost(postDetail, postId, (data) => {
        navigate(`/admin/edit/${data.id}`);
      })
    );
  };

  const onDeleteHandler = async () => {
    // eslint-disable-next-line no-alert, no-undef
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");

    if (confirmDelete) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_BACKEND_API}/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        toast.success("Post deleted successfully");
        navigate(`/admin/posts`);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <main className="m-2 p-3">
      <section>
        <h4>Add New Post</h4>
        <AddPostAndEditPostForm
          postDetail={postDetail}
          setPostDetail={setPostDetail}
          onSubmitHandler={onSubmitHandler}
          postId={postId}
          onDeleteHandler={onDeleteHandler}
        />
      </section>
    </main>
  );
};
export default AddNewPostAndEdit;
