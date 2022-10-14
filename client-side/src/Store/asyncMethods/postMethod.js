import { toast } from "react-hot-toast";
import axiosInstance from "../../utility/axiosInstance";

export const createOrUpdatePost = (postDetail, postId, callback) => async (dispatch, state) => {
  try {
    const {
      auth: { token },
    } = state();
    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append("title", postDetail.title);
    formData.append("type", postDetail.type);
    formData.append("name", postDetail.name);
    formData.append("image", postDetail.imageFile);
    formData.append("cover", postDetail.coverFile);
    formData.append("categories", JSON.stringify(postDetail.categories.map((item) => parseInt(item, 10))));
    formData.append(
      "content",
      postDetail.type === "singleVideo" || postDetail.type === "singleFile"
        ? JSON.stringify(postDetail.downloadLink)
        : JSON.stringify(postDetail.content)
    );
    formData.append("tags", postDetail.tags);
    formData.append("metaData", postDetail.metaData);
    formData.append("year", postDetail.year);
    formData.append("watchTime", postDetail.watchTime);
    formData.append("quality", postDetail.quality);

    if (postId) {
      const { data } = await axiosInstance.patch(`/posts/${postId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post Updated Successfully");
      callback(data);
    } else {
      const { data } = await axiosInstance.post(`/posts`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Post added successfully");
      callback(data);
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

export default "";
